import sys
sys.path.append('/opt/.manus/.sandbox-runtime')
from data_api import ApiClient
import json
import pandas as pd
from datetime import datetime

# Initialize API client
client = ApiClient()

# Define search queries for different potential niches
search_queries = [
    "sustainable fashion",
    "home fitness equipment",
    "mental health apps",
    "plant based diet",
    "remote work tools",
    "crypto investing",
    "AI tools for business",
    "subscription box service",
    "online courses",
    "smart home devices",
    "sustainable travel",
    "personal finance app",
    "digital nomad lifestyle",
    "NFT marketplace",
    "wellness products"
]

# Create a dataframe to store results
results_df = pd.DataFrame(columns=['query', 'tweet_count', 'engagement_avg', 'top_tweets'])

# Search Twitter for each query
for query in search_queries:
    print(f"Searching for: {query}")
    
    # Call Twitter search API
    response = client.call_api('Twitter/search_twitter', query={
        'query': query,
        'count': 20,
        'type': 'Top'
    })
    
    # Process and save results
    if response:
        # Save raw response for detailed analysis
        with open(f"/home/ubuntu/research/twitter_data/{query.replace(' ', '_')}_raw.json", 'w') as f:
            json.dump(response, f, indent=2)
        
        # Extract relevant metrics
        tweet_count = 0
        engagement_total = 0
        top_tweets = []
        
        # Navigate through the complex Twitter response structure
        try:
            if 'result' in response and 'timeline' in response['result']:
                instructions = response['result']['timeline'].get('instructions', [])
                for instruction in instructions:
                    entries = instruction.get('entries', [])
                    for entry in entries:
                        content = entry.get('content', {})
                        if 'items' in content:
                            for item in content['items']:
                                tweet_count += 1
                                # Extract tweet text and engagement if available
                                item_content = item.get('item', {}).get('itemContent', {})
                                if item_content and len(top_tweets) < 3:
                                    top_tweets.append(str(item_content))
                                engagement_total += 1  # Simplified engagement metric
        except Exception as e:
            print(f"Error processing {query}: {e}")
        
        # Calculate average engagement
        engagement_avg = engagement_total / tweet_count if tweet_count > 0 else 0
        
        # Add to dataframe
        results_df = results_df._append({
            'query': query,
            'tweet_count': tweet_count,
            'engagement_avg': engagement_avg,
            'top_tweets': top_tweets
        }, ignore_index=True)
        
        print(f"Found {tweet_count} tweets for {query}")
    else:
        print(f"No results for {query}")

# Sort by engagement
results_df = results_df.sort_values(by='engagement_avg', ascending=False)

# Save results to CSV
results_df.to_csv("/home/ubuntu/research/twitter_data/twitter_trends_results.csv", index=False)

# Generate summary report
with open("/home/ubuntu/research/twitter_data/twitter_trends_summary.md", 'w') as f:
    f.write(f"# Twitter Trends Analysis\n\n")
    f.write(f"Analysis Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
    f.write("## Top Trending Topics by Engagement\n\n")
    
    for i, row in results_df.head(5).iterrows():
        f.write(f"### {i+1}. {row['query'].title()}\n")
        f.write(f"- Tweet Count: {row['tweet_count']}\n")
        f.write(f"- Average Engagement: {row['engagement_avg']:.2f}\n\n")
    
    f.write("## Complete Results\n\n")
    f.write("| Rank | Topic | Tweet Count | Engagement Score |\n")
    f.write("|------|-------|-------------|------------------|\n")
    
    for i, row in results_df.iterrows():
        f.write(f"| {i+1} | {row['query']} | {row['tweet_count']} | {row['engagement_avg']:.2f} |\n")

print("Analysis complete. Results saved to twitter_trends_results.csv and twitter_trends_summary.md")
