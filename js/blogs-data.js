// Central blog data store
// Add new blogs at the TOP of this array to keep them in reverse chronological order
// The first 3 blogs will automatically appear on the homepage

const blogsData = [
    {
        id: 'blog-1',
        title: 'The Future of Strategic Planning in 2025',
        date: 'March 15, 2025',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        excerpt: 'Explore how AI and data analytics are reshaping the strategic planning landscape, and what it means for businesses seeking competitive advantage...',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-2',
        title: 'Building Resilient Organizations',
        date: 'February 28, 2025',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
        excerpt: 'Learn the key principles of organizational resilience and how to build adaptable structures that thrive in uncertainty...',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-3',
        title: 'Belgium\'s Rising Obesity Challenge',
        date: 'January 10, 2025',
        image: 'https://images.unsplash.com/photo-1569425753695-f00b61ce5ddb?w=800&h=400&fit=crop',
        excerpt: 'Belgium faces an escalating obesity crisis, with recent data showing 60% of adults and 20% of children now classified as overweight or obese...',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-4',
        title: 'Placeholder Blog Post 4',
        date: 'December 15, 2024',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop',
        excerpt: 'This is a placeholder for future thought leadership content...',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-5',
        title: 'Placeholder Blog Post 5',
        date: 'November 20, 2024',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
        excerpt: 'This is a placeholder for future thought leadership content...',
        content: 'More new thinking to generate discussions coming soon'
    },
    {
        id: 'blog-6',
        title: 'Placeholder Blog Post 6',
        date: 'October 30, 2024',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
        excerpt: 'This is a placeholder for future thought leadership content...',
        content: 'More new thinking to generate discussions coming soon'
    }
];

// Make blogsData available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogsData;
}
