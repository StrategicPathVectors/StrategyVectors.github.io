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
    title: 'It\'s Time to Retire SWOT',
    date: 'October 21, 2025',
    image: 'images/anti-swot.png',
    excerpt: '"Never do a SWOT analysis. And never pay attention to a SWOT analysis you happen to receive" (Roger L. Martin)',
    content: `Stop The Strategic Charade: Why It's Time to Retire SWOT Analysis
(Estimated Read Time: 5-minutes)

For decades, the SWOT analysis has been a staple in boardrooms and business school classrooms. Strengths, Weaknesses, Opportunities, Threats – a simple 2x2 grid promising clarity. It feels like a foundational exercise, a rite of passage for any strategic discussion.

But what if I told you that this ubiquitous tool isn't just ineffective, but actively dangerous? 

What if it's a strategic charade, giving you the illusion of insight while hindering genuine progress?

As a business school graduate who has spent decades working & consulting with teams on strategy creation, I've never found SWOT to be helpful, but I wanted to understand what other leading thinkers have concluded too. I've come to a stark conclusion, echoed by leading thinkers across the globe: You should never use SWOT analysis.

Let's unpack why…

The Illusion of Analysis: A Glorified To-Do List
At its core, a typical SWOT analysis is nothing more than a glorified list. We brainstorm, fill in the boxes, and then… what? We're left with four distinct lists, often filled with vague, unprioritized bullet points.

Professor Ajay Sirsi, an expert in customer-centric strategy from the Schulich School of Business, argues that this isn't even analysis; it's an "aimless data collection" exercise. 

His work emphasizes that strategy must be "outside-in"; starting with the customer and market. SWOT, however, encourages an "inside-out" view by starting with internal Strengths and Weaknesses, making the company, not the customer, the centre of the universe. It lacks the critical step of action and leaves you with information, but no inherent mechanism for making a difficult choice or building a coherent plan.

Empirical Evidence: SWOT as a "Bureaucratic Cul-de-Sac"
The critique isn't just theoretical. Groundbreaking research from the UK's University of Bath in 1997, notably by Professor Terry Hill and Dr. Roy Westbrook, provided empirical evidence of SWOT's failings. In their study of 20 UK manufacturing companies, they found that:
- SWOT analyses generated generic, vague lists.
- There was no prioritization or validation of the listed items.
- Crucially, the outputs of the SWOT were almost never used to inform or generate actual business strategies.

Their conclusion was damning; SWOT analysis often functions as a "bureaucratic, sterile, and ultimately futile exercise," a "cul-de-sac" that consumes valuable time and resources with no tangible strategic output. 
It's a performative act, not a productive one.

Obsolete in a Complex World: The European Perspective
Beyond specific academic studies, a pervasive sentiment in leading European business institutions like INSEAD and IMD, and among many modern consultants, is that SWOT is simply a relic. The modern business landscape is characterized by:
- Hyper-speed change: Strengths can become weaknesses overnight (think of a massive retail footprint before and after the e-commerce explosion).
- Unprecedented complexity: Interconnected ecosystems, global supply chains, and rapid technological shifts cannot be captured in four static boxes.
- Need for agility: Traditional, annual SWOT-based planning cycles are far too slow for today's dynamic markets.

In this environment, relying on a SWOT analysis is like bringing a horse and cart to a Formula One race. It's an analogue tool in a digital world, incapable of providing the dynamic, nuanced insights required to compete and innovate.

Bad Strategy: The SWOT Catalyst
Richard Rumelt, author of the seminal "Good Strategy/Bad Strategy," would look at a typical SWOT and see the hallmarks of "Bad Strategy." His definition of good strategy includes a sharp diagnosis of a critical challenge, a guiding policy, and coherent actions.

SWOT, on the other hand, rarely provides any of this. It's a laundry list, not a diagnosis. It doesn't force the hard intellectual work of identifying the single most critical challenge your business faces. Instead, it encourages generic statements and avoids the painful trade-offs that true strategy demands. As Rumelt would contend, a strategy that starts with SWOT is often already doomed to be weak and unfocused.

The Problem of Context and Choices: Roger Martin's Disdain
Former Rotman School of Management Dean, Roger L. Martin, is perhaps the most vocal proponent of abandoning SWOT entirely. His advice is blunt: "Never do a SWOT analysis. And never pay attention to a SWOT analysis you happen to receive."

Why such a strong stance? Martin's strategic philosophy is built on making rigorous, integrated choices. A "strength," for example, is only a strength in relation to a specific "where to play" and "how to win" strategic choice. If you haven't defined these choices yet (which is usually the case when a SWOT is performed), then your "strengths" and "weaknesses" are just generic observations, devoid of strategic meaning. 

SWOT, by generating long, unweighted lists, avoids the essential hard work of making these choices, pulling you away from building a truly impactful strategy.

The Bottom Line
SWOT analysis, born with good intentions to foster alignment, has devolved into a superficial exercise that often provides a false sense of strategic security. It generates lists instead of insights, avoids crucial choices, and is ill-equipped for the complexities and speeds of modern business.

It's time to stop the strategic charade. For your business's future, abandon the SWOT.`
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
