
// Central blog data store
// Add new blogs at the TOP of this array to keep them in reverse chronological order
// The first 3 blogs will automatically appear on the homepage

const blogsData = [
    {
        id: 'blog-1',
        title: 'New content coming soon',
        date: '7 November, 2025',
        image: 'images/golf_strategy.png',
        excerpt: 'Explore how golf & "course management" is a great analogy for strategic decision-making',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-2',
        title: 'The Science of Strategic Insights',
        date: '3 November, 2025',
        image: 'images/insight_aha.png',
        excerpt: 'Understanding the Cognitive Foundations and collaborative practices that transform data into contextualised intelligence and then on to insight is crucial',
        content: 'Strategic insights do not arrive through mystical inspiration. They emerge from specific neurobiological processes in your brain and deliberate collaborative practices in your teams. More details coming soon in this blog post.'
    },
    {
        id: 'blog-3',
        title: "It's Time to Retire SWOT",
        date: '27 October, 2025',
        image: 'images/anti-swot.png',
        excerpt: '"Never do a SWOT analysis. And never pay attention to a SWOT analysis you happen to receive" (Roger L. Martin)',
        content: 'For decades, the SWOT analysis has been a staple in boardrooms and business school classrooms. But what if this ubiquitous tool is not just ineffective, but actively dangerous? More details coming soon in this blog post.'
    },
    {
        id: 'blog-4',
        title: 'Placeholder Blog 4',
        date: 'November 15, 2025',
        image: 'images/wtp_htw.png',
        excerpt: 'Your Strategy Creating System is Broken. Here is a Better Way',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-5',
        title: 'Placeholder Blog 5',
        date: 'November 20, 2025',
        image: 'images/crystal_ball.png',
        excerpt: 'There are no facts about the future',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-6',
        title: 'Placeholder Blog 6',
        date: 'November 30, 2025',
        image: 'images/insights_workshop.png',
        excerpt: 'This is a placeholder for future strategic insight content',
        content: 'More new thinking to generate discussions coming soon'
    }
];

// Make blogsData available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogsData;
}
