
// Central blog data store
// Add new blogs at the TOP of this array to keep them in reverse chronological order
// The first 3 blogs will automatically appear on the homepage

const blogsData = [
   
   {
        id: 'new blog coming soon',
        title: 'NEW blog: Coming Soon',
        date: 'December 8, 2025',
        image: 'images/insights_workshop.png',
        excerpt: 'More on Strategic Insights: (pt 3)',
        content: 'More new thinking to generate discussions coming soon'
    },

{
    id: 'Breakthrough Thinking',
        title: 'Strategic Insights: How Your Brain & Your Team Generate Breakthrough Thinking (pt 2)',
        date: 'December 1, 2025',
        image: 'images/6_hats.png',
    excerpt: 'Insight generation requires specific cognitive capabilities that individuals can develop through deliberate practice',
    content: `<p><em>(Estimated Read Time: 5-minutes)</em></p>
        <p>In our last "insights" blog we focused on gaining clarity on what an insight looks like and even feels like in the "Eureka" moment. This time we focus on "how to get there" and the <strong>Core Cognitive Competencies that Generate Insights</strong>. Understanding this methodology is necessary but insufficient.).</p>

        <p>Insight generation requires specific cognitive capabilities that individuals can develop through deliberate practice.</p>

        <p><strong>Pattern Recognition: "Seeing What Others Miss".</strong> The most fundamental discipline is pattern recognition: spotting trends, connections, and opportunities in complex environments. Gary Klein's naturalistic decision-making research identifies this as the foundation of strategic thinking, complemented by systems analysis, mental agility, structured problem-solving, visioning, and political savvy.</p>

        <p>Pattern recognition requires identifying & distinguishing "pattern signalling" from "noise," and distinguishing what's "true" from what's just "opinion". Research in the Strategic Management Journal emphasizes that insights generation relates to dynamic capabilities, organizational learning, knowledge management, and innovation performance—all rooted in superior pattern recognition.</p>

        <p>In real-world contexts, strategic recognition appears in recognizing divergent strategic choices with prescriber adoption patterns, link payer coverage decisions with patient access, or identifying new competitive angles from unexpected therapeutic angles. The skill develops through exposure to diverse problems, deliberate practice analyzing complex scenarios, and feedback on pattern identification quality.</p>

        <p><strong>Abductive Reasoning: "Generating Plausible Explanations".</strong> Unlike deductive reasoning (applying general rules to specific cases) or inductive reasoning (deriving general rules from observations), <strong>abductive reasoning generates plausible explanations from incomplete observations</strong>; essential when facing uncertainty typical in strategy development.</p>

        <p>Abduction seeks the simplest and most likely explanation for observations, yielding plausible but not certain conclusions. This form of reasoning involves prefrontal cortex and executive functions, requires working memory and cognitive flexibility, and creates mental models from incomplete data. True strategic insights require more than observation—they demand moving from "what's happening to why it's happening to what should be done<strong>.</strong> Abductive reasoning bridges observation to inference, generating hypotheses about causal mechanisms that can then be tested and refined via systematic problem locations.</p>

        <p><strong>Synthesis: "Creating New Knowledge from Diverse Sources".</strong> Jon Kolko (2012) describes synthesis as "making meaning through inference-based sensemaking"—moving from observations to patterns to frameworks. This differs fundamentally from analysis. While analysis breaks problems into components, synthesis combines disparate pieces into novel configurations revealing new relationships.</p>

        <p>Synthesis requires three types of thinking simultaneously: deductive (validating against data), inductive (expanding to generalizations), and abductive (making explanatory leaps when data incomplete).</p>

        <p>Insights emerge at the intersection when all three operate together. George Day and Paul Schoemaker call these "peripheral insights" as a vital capacity that organizations must systematically develop rather than waiting for random eureka moments. Building synthesis capacity requires exposure to diverse knowledge domains, practice connecting apparently unrelated concepts, structured frameworks for integration, and team-based synthesis processes that leverage collective intelligence.</p>
    `
},
{
   id: 'Crystal-ball gazing',
   title: "How to Make Strategy Decisions When Facts Don't Exist (& Your Crystal Ball Isn't Working)",
   date: "November 21, 2025",
   image: 'images/crystal_ball.png',
   excerpt: 'There are no facts about the future. There is a Better Way to look forward though...',
   content: `<p><em>(Estimated Read Time: 7-minutes)</em></p>
            <p><strong>Here's the fundamental problem with strategy:</strong> you're making irreversible decisions today about a future that doesn't exist yet, using data you don't have (can't have), about markets that haven't formed, with competitors who might not be different tomorrow.</p>

            <p>Think about the weight of that reality. Every strategic commitment—every resource allocation & investment & every market entry & development is fundamentally a bet on futures that exist only in your imagination. <strong>And here's what makes this truly uncomfortable: there are no facts about the future. None. Zero. Not a single empirically verifiable data point about what's coming next.</p></strong>

            <p>So how do you make intelligent strategic choices when the very foundation of rational decision-making, i.e. facts, don't exist?</p>

            <p>The answer lies in understanding a type of reasoning most business leaders have never formally learned, combined with systematic approaches to exploring multiple futures. This isn't theoretical philosophy.</p>

            <p>Let me show you how it works—and how you can start applying it immediately.</p>

            <h3>The 3 Types of Reasoning</h3> (& Why You're Probably Using the Wrong Ones)

            <p>Most strategic thinking operates through two familiar modes of reasoning: deduction and induction. But there's a third type, <strong>"abductive reasoning"</strong> that's essential for strategy yet rarely taught explicitly. Understanding the differences changes everything.</p>

           <style>
    .reasoning-table-wrapper {
        margin: 40px 0;
        background: white;
        border-radius: 10px;
        box-shadow: 0 8px 30px rgba(68, 0, 58, 0.15);
        overflow: hidden;
    }
    
    .reasoning-table-header {
        background: linear-gradient(135deg, #44003A 0%, #8400AC 100%);
        color: white;
        padding: 25px 20px;
        position: relative;
        overflow: hidden;
    }
    
    .reasoning-table-header::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -5%;
        width: 200px;
        height: 200px;
        background: rgba(235, 28, 169, 0.2);
        border-radius: 50%;
    }
    
    .reasoning-table-header-content {
        position: relative;
        z-index: 1;
    }
    
    .reasoning-table-header h3 {
        font-size: 1.6em;
        margin-bottom: 8px;
        font-weight: 700;
        letter-spacing: -0.5px;
    }
    
    .reasoning-table-header p {
        font-size: 0.95em;
        opacity: 0.95;
        font-weight: 300;
    }
    
    .reasoning-table-content {
        padding: 20px 15px;
    }
    
    .reasoning-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 12px;
        table-layout: fixed;
    }
    
    .reasoning-table th {
        padding: 12px 10px;
        text-align: left;
        font-weight: 700;
        font-size: 0.7em;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        background: #44003A;
        color: #FFE594;
        border: none;
    }
    
    .reasoning-table th:nth-child(1) { width: 12%; }
    .reasoning-table th:nth-child(2) { width: 22%; }
    .reasoning-table th:nth-child(3) { width: 16%; }
    .reasoning-table th:nth-child(4) { width: 22%; }
    .reasoning-table th:nth-child(5) { width: 28%; }
    
    .reasoning-table th:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
    
    .reasoning-table th:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    
    .reasoning-table tbody tr {
        background: white;
        box-shadow: 0 2px 6px rgba(68, 0, 58, 0.08);
        border-radius: 8px;
    }
    
    .reasoning-table td {
        padding: 16px 10px;
        vertical-align: top;
        line-height: 1.4;
        background: white;
        font-size: 0.85em;
    }
    
    .reasoning-table td:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    
    .reasoning-table td:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    
    .reasoning-type {
        font-weight: 800;
        font-size: 1.3em;
        margin-bottom: 4px;
        letter-spacing: -0.5px;
    }
    
    .deductive .reasoning-type { color: #FF4834; }
    .inductive .reasoning-type { color: #8400AC; }
    .abductive .reasoning-type { color: #FFC14C; }
    
    .deductive { border-left: 4px solid #FF4834; }
    .inductive { border-left: 4px solid #8400AC; }
    .abductive { border-left: 4px solid #FFC14C; }
    
    .logic-flow {
        font-weight: 700;
        color: #44003A;
        margin-bottom: 8px;
        font-size: 0.95em;
    }
    
    .example {
        background: linear-gradient(135deg, #FFE594 0%, #FFC14C 100%);
        padding: 10px 12px;
        border-radius: 6px;
        font-style: italic;
        margin-top: 6px;
        border-left: 3px solid #FF4834;
        font-size: 0.85em;
        color: #44003A;
        line-height: 1.5;
    }
    
    .certainty {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 18px;
        font-size: 0.7em;
        font-weight: 700;
        margin-top: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .certainty.high {
        background: #FF4834;
        color: white;
    }
    
    .certainty.medium {
        background: #8400AC;
        color: white;
    }
    
    .certainty.low {
        background: #FFC14C;
        color: #44003A;
    }
    
    .certainty-note {
        margin-top: 8px;
        color: #5E5E5E;
        font-size: 0.8em;
        line-height: 1.4;
    }
    
    .best-for ul {
        margin-top: 8px;
        margin-left: 0;
        list-style: none;
    }
    
    .best-for li {
        margin: 6px 0;
        color: #44003A;
        padding-left: 20px;
        position: relative;
        line-height: 1.3;
        font-size: 0.9em;
    }
    
    .best-for li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: #FF4834;
        font-weight: 700;
        font-size: 1em;
    }
    
    .strategic-value {
        margin-top: 8px;
        padding: 14px;
        border-radius: 8px;
        font-weight: 600;
        border: 2px solid;
    }
    
    .strategic-value.low {
        background: linear-gradient(135deg, #FF4834 0%, #EB1CA9 100%);
        border-color: #44003A;
        color: white;
    }
    
    .strategic-value.medium {
        background: linear-gradient(135deg, #EB1CA9 0%, #8400AC 100%);
        border-color: #44003A;
        color: white;
    }
    
    .strategic-value.high {
        background: linear-gradient(135deg, #44003A 0%, #8400AC 100%);
        border-color: #FF4834;
        color: #FFE594;
    }
    
    .strategic-value .label {
        font-size: 0.95em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 800;
        margin-bottom: 6px;
        display: block;
    }
    
    .strategic-value .description {
        font-weight: 400;
        font-size: 0.8em;
        line-height: 1.4;
        opacity: 0.95;
    }

    /* ALL MOBILE STYLES IN ONE UNIFIED BLOCK */
    @media (max-width: 768px) {
        /* Enable smooth horizontal scrolling */
        .reasoning-table-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 20px -15px;
        }
        
        /* Prevent table from compressing too much */
        .reasoning-table-content {
            min-width: 768px;
            padding: 15px;
        }
        
        /* Add visual scroll indicator */
        .reasoning-table-wrapper::after {
            content: '← Swipe to see more →';
            display: block;
            text-align: center;
            padding: 10px;
            background: linear-gradient(135deg, #44003A 0%, #8400AC 100%);
            color: white;
            font-size: 0.8em;
            font-weight: 600;
        }
        
        /* Better text readability on mobile */
        .reasoning-table {
            font-size: 14px;
        }
        
        .reasoning-table th,
        .reasoning-table td {
            padding: 12px 8px;
            min-height: 44px;
        }
        
        .reasoning-type {
            font-size: 1.2em;
        }
        
        .example {
            font-size: 13px;
            line-height: 1.6;
        }
        
        /* Prevent iOS from automatically adjusting text size */
        .reasoning-table-wrapper {
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
        }
    }

    /* Extra adjustments for very small phones */
    @media (max-width: 480px) {
        .reasoning-table-content {
            min-width: 680px;
        }
        
        .reasoning-table-header h3 {
            font-size: 1.3em;
        }
        
        .reasoning-table-header p {
            font-size: 0.85em;
        }
    }
</style>

            <div class="reasoning-table-wrapper">
                <div class="reasoning-table-header">
                    <div class="reasoning-table-header-content">
                        <h3>Three Types of Strategic Reasoning</h3>
                        <p>Understanding the cognitive foundations of strategic thinking</p>
                    </div>
                </div>
                
                <div class="reasoning-table-content">
                    <table class="reasoning-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Logic Flow & Example</th>
                                <th>Certainty</th>
                                <th>Best Used For</th>
                                <th>Strategic Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="deductive">
                                <td>
                                    <div class="reasoning-type">DEDUCTIVE</div>
                                </td>
                                <td>
                                    <div class="logic-flow">General rule → Specific case</div>
                                    <div class="example">
                                        "All swans catalogued are white" + "This is a swan" = "Therefore, this swan is white"
                                    </div>
                                </td>
                                <td>
                                    <span class="certainty high">High</span>
                                    <p class="certainty-note">If premises true, conclusion certain</p>
                                </td>
                                <td>
                                    <div class="best-for">
                                        <ul>
                                            <li>Applying known principles</li>
                                            <li>System optimization</li>
                                            <li>Quality control</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div class="strategic-value low">
                                        <div class="label">⚠️ Low for Innovation</div>
                                        <div class="description">Optimizes existing approaches but cannot discover new possibilities. Excellent for efficiency, poor for breakthroughs.</div>
                                    </div>
                                </td>
                            </tr>
                            
                            <tr class="inductive">
                                <td>
                                    <div class="reasoning-type">INDUCTIVE</div>
                                </td>
                                <td>
                                    <div class="logic-flow">Observations → Pattern</div>
                                    <div class="example">
                                        "Swan 1 is white" + "Swan 2 is white" + "Swan N is white" = "All swans are white"
                                    </div>
                                </td>
                                <td>
                                    <span class="certainty medium">Medium</span>
                                    <p class="certainty-note">Probability-based; vulnerable to outliers</p>
                                </td>
                                <td>
                                    <div class="best-for">
                                        <ul>
                                            <li>Building theories from data</li>
                                            <li>Trend analysis</li>
                                            <li>Pattern recognition</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div class="strategic-value medium">
                                        <div class="label">⚡ Medium for Innovation</div>
                                        <div class="description">Identifies patterns but vulnerable to black swans. Assumes future resembles past—useful for incremental improvement.</div>
                                    </div>
                                </td>
                            </tr>
                            
                            <tr class="abductive">
                                <td>
                                    <div class="reasoning-type">ABDUCTIVE</div>
                                </td>
                                <td>
                                    <div class="logic-flow">Observation + Context → Best explanation</div>
                                    <div class="example">
                                        "This bird is black with swan features" + "Black swans might exist" = "This could be a black swan"
                                    </div>
                                </td>
                                <td>
                                    <span class="certainty low">Low</span>
                                    <p class="certainty-note">Generates hypotheses requiring testing</p>
                                </td>
                                <td>
                                    <div class="best-for">
                                        <ul>
                                            <li>Novel explanations</li>
                                            <li>Creative problem-solving</li>
                                            <li>Strategic innovation</li>
                                            <li>Complex diagnosis</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div class="strategic-value high">
                                        <div class="label">🚀 High for Innovation</div>
                                        <div class="description">Enables imaginative leaps beyond available data. Creates new possibilities and competitive advantage by exploring "what could be."</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p>Here's why this matters profoundly for strategy:</p>

            <p>Deduction optimizes what you're already doing.</p>

            <p>Induction identifies trends in what's already happened.</p>

            <p><strong>But abduction generates possibilities for what could be—and that's where strategic advantage lives.</p></strong>

            <p>Charles Sanders Peirce, the philosopher who formalized abductive reasoning, called it "the logic of what might be." It's the cognitive process that lets you look at incomplete information and generate the best guess about what's happening or what could happen. Not the proven answer. Not the statistically likely answer. The most insightful answer given what you know and what you're trying to achieve.</p>

            <p>This is the reasoning mode that makes strategic foresight possible. And it's trainable.</p>

            <p>Why Traditional Strategy Creation Fails: The Tyranny of the Single Future</p>

            <p>For most of business history, strategic planning meant forecasting. You'd gather historical data, identify trends, extend those trends forward, and call the result your 5-year plan. This produced beautifully detailed "strategic" slides with charts showing exactly where you'd be in 2030. But most if not all forecasts are never met exactly (obviously, but we keep doing it to build strategy!)</p>

            <p>Here's why:</p>

            <p>Forecasting asks, "What will happen?" (& that tends to be based purely on historical data & linked assumptions)</p>

            <p>Foresight asks, "What could happen?" (and that is a far bigger, scarier prospect!)</p>

            <p>That subtle shift in questions opens up an entirely different strategic approach. Forecasting assumes a single most-likely future and optimizes for it. This produces organizational brittleness—you're superbly prepared for one future and catastrophically unprepared for alternatives. When the unexpected happens (and in our current era, it will happen), you're blindsided.</p>

            <p>Foresight recognizes that multiple futures remain genuinely possible and that your strategic choices today influence which one emerges. Rather than one forecast, you develop a portfolio of scenarios. Rather than optimizing for a single future, you identify strategic moves that create advantage across multiple possible futures.</p>

            <p>This is possibilism: the recognition that futures are not predetermined but shaped by choices made in the present.</p>

            <p>The Integration Imperative: Why Singapore Succeeds Where Others Fail</p>

            <p>Scenario planning represents one powerful technique. But the organizations achieving true foresight excellence don't rely on single methodologies. They integrate complementary approaches systematically.

            <p>Singapore provides the masterclass. As a small island nation they recognized early that foresight wasn't optional—it was existential. The Centre for Strategic Futures, established in the Prime Minister's Office, practices what they call "Scenario Planning Plus." The "Plus" matters enormously. They don't just do scenario planning. They systematically combine:</p>

            <ul>
               <li>Horizon Scanning</li>
               <li>Weak Signals Analysis</li>
               <li>Scenario Planning</li>
               <li>Back-casting</li>
               <li>War Gaming</li>
               <li>Complexity Theory</li>
               <li>Big Data Analytics</li>
            </ul>

            <p>The Centre conducts regular "Futures Conversations" across government agencies. They rotate public servants through the Centre to build foresight capacity throughout the system. After 35+ years of practice, thinking about multiple futures has become Singapore's institutional DNA.</p>

            <p>The lesson isn't "use scenario planning" or "do horizon scanning." The lesson is that excellence emerges from integrating complementary techniques contextually. Horizon scanning provides peripheral vision. Scenarios explore possibilities. Back-casting identifies pathways. War gaming tests responses. Complexity theory reveals dynamics. Together, they create comprehensive capability that single methodologies cannot.</p>

            <h3>The Bridge to Action: "What Would Have to Be True"</h3>

            <p>Strategic foresight generates rich understanding of possible futures. But how do you translate that insight into strategic choices? How do you move from "here are four plausible futures" to "here's what we're going to do"?</p>

            <p>This is where Roger Martin and A.G. Lafley's "What Would Have to Be True" (WWHTTBT) framework provides the essential bridge. It's deceptively simple and remarkably powerful.</p>

            <p>Here's the problem most strategic debates devolve into: people argue about what is true. "The market is growing." "No, it's saturating." "Customers want premium." "No, they want value." These debates are unresolvable because there are no facts about the future to settle the argument.</p>

            <p>WWHTTBT flips the conversation entirely. Instead of arguing about what is true, you ask: "What would have to be true for this strategy to succeed?"</p>

            <p>Suddenly, you're not debating. You're collaboratively listing testable conditions.</p>

            <p>The framework separates logic from data. Teams agree on the logic—the conditions required for success—before arguing about whether those conditions exist or can be created. This produces three transformative benefits:</p>

            <p>First, it reduces defensiveness. You're not attacking someone's strategy; you're collaboratively exploring its requirements. The conversation shifts from "your idea is wrong" to "what needs to be true for this to work?"</p>

            <p>Second, it clarifies assumptions. Every strategy rests on assumptions about customers, competitors, capabilities, markets, and regulations. WWHTTBT makes those assumptions explicit and therefore testable.</p>

            <p>Third, it creates monitoring frameworks. Once you've identified conditions required for success, you can design experiments to test them and establish indicators to monitor them. Strategy becomes hypothesis-testing rather than opinion warfare.</p>

            <p>This is how you connect foresight to strategic choice. You explore multiple scenarios. For each scenario, you identify promising strategies. For each strategy, you articulate conditions required for success using WWHTTBT. You test those conditions. You monitor indicators showing which scenarios are emerging and which conditions are materializing. You adjust strategy dynamically as the future clarifies.</p>

            <h3>Practical Application: Your Immediate Action Plan</h3>

            <p>You can begin improving your strategic thinking immediately with four focused practices:</p>

            <h3>1. Establish Structured Market Info Contextualisation (Start This Week!)</h3>

            <p>Stop treating market data as the ultimate resource for strategy. Contextualise data into useful intelligence. Contact us about the rapidity, robustness & revolutionary re-focusing delivered by our Patient Journey Framework & resultant Strategy Vectors</p>

            <p>You'll be astonished how many weak system-level & market-based signals you were missing simply because nobody was systematically watching or contextualising all the data & information.</p>

            <h3>2. Run a Scenario Workshop (Do This In January 2026)</h3>

            <p>Identify the 2-3 most critical uncertainties facing your organization over the next 5-10 years. Not certainties (those are constraints, not scenarios). Not minor variables (those don't generate meaningfully different futures). The fundamental uncertainties that could push your industry in radically different directions. These might be what Rumelt calls the kernel of strategy</p>

            <p>Create a 2x2 matrix with those uncertainties as axes. That gives you four scenarios. For each:</p>

            <p>Develop a rich narrative and then test your current strategy:</p>

            <ul>
                <li>Which of our initiatives work well in each scenario?</li>
                <li>Which are vulnerable?</li>
                <li>What "no-regrets moves" work across multiple scenarios?</li>
                <li>What options should we preserve?</li>
                <li>What early indicators would tell us which scenario is emerging?</li>
            </ul>

            <p>This doesn't require expensive consultants or week-long off-sites. A well-facilitated half-day session with your leadership team generates remarkable insight. The conversation itself transforms how people think about uncertainty.</p>

            <h3>3. Apply WWHTTBT to Current Strategic Initiatives (Do This Q1 26)</h3>

            <p>Take every major strategic initiative currently underway. For each one:</p>

            <p>List 5-7 conditions that must be true for success. Be specific. Not "customers must want this" but "urban millennial customers must value convenience over price by ratio of at least 2:1." Not "we must execute well" but "our project management office must deliver 80%+ of technology projects on time and on budget."</p>

            <p>Rate your confidence in each condition:</p>

            <ul>
                <li>High confidence (>75%): Strong evidence this condition exists or will exist</li>
                <li>Medium confidence (40-75%): Some evidence, significant uncertainty</li>
                <li>Low confidence (<40%): Little evidence, major questions</li>
            </ul>

            <p>Low confidence conditions become immediate priorities for testing. Design experiments, gather data, interview customers, analyze competitors. Transform assumptions into knowledge.</p>

            <p>Create monitoring dashboards. For conditions you're confident about now, identify leading indicators that would signal change. If customer preferences shift, what would you see first? If competitive dynamics change, what early signals would appear?</p>

            <p>This transforms strategic planning from opinion exercise into systematic hypothesis testing.</p>

            <h3>4. Practice Abductive Reasoning (Do This Daily, Start Today)</h3>

            <p>Abductive reasoning is a skill you can deliberately develop. Start training it through simple practices:</p>

            <p>When you observe something surprising, ask: "What explanation would make this make sense?" Not "Is this right or wrong?" but "What story connects these observations?"</p>

            <p>When evaluating ideas, ask: "Where does this lead?" not "Is this immediately correct?" Suspend judgment long enough to explore implications. Poor ideas often contain seeds of breakthrough ideas visible only through exploration.</p>

            <p>When facing complex problems, generate multiple explanations. Not just the most likely explanation—multiple plausible explanations. This trains your mind to hold multiple possibilities simultaneously rather than prematurely converging on single answers.</p>

            <p>Cross-pollinate domains deliberately. When working on problem in domain A, ask: "How does domain B address similar challenges?" Healthcare can learn from aviation's safety protocols. Manufacturing can learn from software's agile methods. Finance can learn from sports analytics. Abductive leaps often come from connecting previously unconnected domains.</p>

            <h3>The Synthesis: Strategy as Disciplined Imagination</h3>

            <p>Let me tie this together, because these aren't separate techniques—they're components of integrated capability.</p>

            <p>Strategic foresight without abductive reasoning produces mechanical scenario planning that misses truly novel possibilities. You need abduction to generate genuinely different futures rather than incremental variations on the present.</p>

            <p>Abductive reasoning without strategic foresight produces clever ideas disconnected from systematic understanding of how futures might unfold. You need foresight's disciplined exploration to ensure your creative hypotheses connect to plausible trajectories.</p>

            <p>Both without WWHTTBT produce interesting conversations but weak links to action. You need the framework to translate insight into testable strategic choices and implementation plans.</p>

            <h3>Your Starting Point: This Week</h3>

            <p>Here's your immediate action plan:</p>

            <p>Contact me to see how we can support you…</p>

            <h2>The Final Word</h2>

            <p>Strategic thinking isn't innate talent. It's trainable capability. The organizations navigating uncertainty successfully aren't lucky. They're practicing systematic approaches to thinking about futures that don't yet exist.</p>

            <p><strong>Because here's the fundamental truth: the future isn't predetermined. It's shapeable. Your strategic choices today influence which of the possible futures becomes real. You're not a passive observer waiting for the future to happen to you. You're an active participant helping to create it.</p></strong>
        </div>
    `
},
   {
    id: 'blog-4',
    title: 'Your Strategy Creating System is Broken. Here\'s a Better Way.',
    date: 'November 14, 2025',
    image: 'images/wtp_htw.png',
    excerpt: 'Your Strategy Creating System is Broken. Here is a Better Way',
    content: `<p><em>(Estimated Read Time: 6-minutes)</em></p>

<p>Let's be honest. How many of us have sat through a multi-day strategy offsite, filled whiteboards with ideas, and contributed to a "strategic plan" that now sits unread in a shared drive? Or worse still is something we can't fully stand behind; where we know we have left opportunities on the table; where we've been too conservative & safe...?</p>

<p>For many managers, strategy feels "complicated, arduous, and ineffectual." We spend countless hours creating plans that are often obsolete before they're even approved. The problem isn't a lack of effort. It's that we're using outdated tools for a world defined by uncertainty and relentless change.</p>

<p>But what if you could assemble a "dream team" of the world's greatest strategic minds to guide you?</p>

<p>What if you could combine their core insights into a single, powerful system that embraces change instead of fearing it?</p>

<p>Based on our deep analysis of over 65 years of strategic thinking, there is a way. At least something to consider for your next strategy creation sessions...</p>

<h3>Meet Your New Strategy "Dream Team"</h3>

<p>No single thinker has all the answers, but the best ones give us powerful tools. To build a strategy that works today, we believe that this a need to integrate the wisdom of several modern masters.</p>

<ul>
<li><strong>The Diagnostician - Richard Rumelt:</strong> He teaches us that most strategies fail because they aren't strategies at all—they're just goals or fluff. He argues that every good strategy has a "kernel": a sharp diagnosis of the core challenge, a guiding policy for how to deal with it, and a set of coherent actions to execute that policy. We diagnose this often in our strategy audits & "pre-mortem" workshops.</li>

<li><strong>The Choice Maker - Roger L. Martin:</strong> He insists strategy isn't a plan; it's a set of five tough, integrated choices: What is our winning aspiration? Where will we play? How will we win? What capabilities must we have? And what management systems do we need? This cascade forces clarity and focus; where execution & thinking come together beautifully.</li>

<li><strong>The Market Creators - Kim & Mauborgne:</strong> The authors of Blue Ocean Strategy argue that competing head-to-head is a bloody "red ocean." The real goal is to create new market space—a "blue ocean"—by pursuing value innovation, which is the simultaneous pursuit of differentiation and low cost.</li>

<li><strong>The Explorer - Rita McGrath:</strong> She states that the era of sustainable competitive advantage is over. To thrive now, you must master discovery-driven planning. This means you must "articulate what you don't know" and then design low-cost experiments to learn as quickly as possible.</li>
</ul>

<h3>The Problem: Why One Genius Isn't Enough</h3>

<p>These frameworks are brilliant, but relying on just one is like trying to build a house with only a hammer. For example,</p>

<ul>
<li>Martin's "Playing to Win" is fantastic for established companies in stable markets but offers less guidance on rapid pivots. So, we have built this into our solution and added Strategic Vectors & pivot points</li>

<li>Agile approaches keep you responsive, but without a clear vision, they can lead to "strategic drift" and short-term thinking. Our unifying lens creates clarity & focus and reduces drift & internal thinking. Our solution considers these risks too.</li>
</ul>

<p>The real power comes from combining these ideas into a single, fluid process.</p>

<h3>A Better Way: Adaptive Strategy with the Patient Journey Framework</h3>

<p>Imagine a process that gives you the clarity of Rumelt and Martin, the innovative power of Blue Ocean, and the adaptability of McGrath and Agile.</p>

<p>Our research proposes just that, in a new, integrated model called the Patient Journey Framework.</p>

<p>Instead of a rigid annual plan, think of it as a continuous, iterative & unifying lens. Here's how it works in practice:</p>

<h4>Step 1: Diagnose Your Challenge & Scan the Horizon</h4>

<p>Instead of a vague & quite honestly useless SWOT (see other blogs for our views on SWOT), start with a real diagnosis. What are the biggest challenges or opportunities facing your business? Build out a complete & unifying contextualised vision of your market with our Patient Journey Framework. Identify the Strategy Vectors or pivot points and use these stimuli to look to the future. Don't try to predict it; instead, develop 3-4 plausible scenarios for your business. This phase is about gaining deep clarity on your starting point and the possible paths ahead. And considering, as Roger Martin suggests, "What Would Have To Be True" about the future for your various scenarios or possibilities to come true</p>

<h4>Step 2: Generate Smart Bets, Not a Single Plan</h4>

<p>With a clear diagnosis, you can now generate your strategic options. Use Martin's "Where to Play/How to Win" cascade to frame your choices. Push your team to think like market creators: How could you use the "Four Actions Framework" to invent a blue ocean of new value? The output here isn't a 50-page plan; it's a handful of powerful strategic hypotheses you need to test.</p>

<h4>Step 3: Experiment Before You Commit</h4>

<p>This is where the magic happens. For each strategic hypothesis, what is the fastest, cheapest experiment you can run to see if it's valid? This is where you can frame future Strategic Insight projects - if you need to know more you will be hyper-focused on specific questions & not generating vague & ultimately useless research reports.</p>

<h3>How to Start: "The First 30 Days" are crucial - start fast with the rapid contextualization of all market intelligence into one unifying lens & build unstoppable momentum.</h3>

<p>This might sound complex, but you can start small. Here's a simple roadmap to launch your first pilot.</p>

<ul>
<li><strong>Month 1 - The Foundation:</strong> Get your leadership team aligned. Form a small, cross-functional pilot team of your best people. Your only goal is to conduct a rigorous diagnosis and define the single most important challenge you want to tackle. Our Patient Journey Framework reporting can be generated in ONE WEEK - imagine how much time you then have for ideation & discussions!</li>

<li><strong>Months 2-3 - Pilot & Experiment:</strong> Now, generate 2-3 strategic options to address your challenge. For each one, design and launch a series of fast, inexpensive experiments. The goal isn't revenue; it's validated learning.</li>

<li><strong>Months 4+ Scale & Integrate:</strong> Evaluate your pilot. What did you learn? Which experiments showed the most promise? Now you can make a real strategic commitment—backed by evidence, not just opinion—and begin scaling the successful initiatives.</li>
</ul>

<h3>The Bottom Line</h3>

<p>Strategy shouldn't be a painful ritual that produces a static document, yet another set of PowerPoint templates being filled. It must be a living, breathing process of continuous learning and adaptation. By integrating the wisdom of the world's best strategic thinkers, you can move from frustrating planning cycles to a dynamic system that builds a unified team picture, with intense clarity, where you bring the "outside-in", foster innovation and actually deliver results.</p>

<p>Reduce linear, blinkered thinking driven by rigid templates, stop planning, stop "playing to play" and pivot toward "playing to win", and start building the capacity to adapt and thrive. Please, ask us to explain more; we'd be delighted to show you what is possible…</p>`
},
   {
    id: 'blog-1',
    title: 'Course Management in Golf: A Lesson in Mastering the Variable Environment',
    date: '7 November, 2025',
    image: 'images/golf_strategy.png',
    excerpt: 'Explore how golf & "course management" is a great analogy for strategic decision-making',
    content: `<strong>"Course Management" in Golf: A Lesson in Mastering the Variable Environment</strong>

<p>Golf is often viewed as a leisurely recreational activity, & yet all players should aim to master the discipline of <strong>"Course Management"</strong>. This is effectively how to <strong>"plot your way around"</strong> & functions as a sophisticated, sequential decision system played within a "non-business" environment. Unlike most other sports, the golf course demands that the practitioner contend not only with competitors but primarily with the ever-changing landscape; a physical analogy for the dynamic, unpredictable nature of modern corporate environments.</p>

<p>Golf distinguishes itself as a premier "analogy" strategy model due to the principle of continuous variability and unique problem sets. Golf presents players with challenges that are <strong>"literally unique with every shot"</strong>. This variability stems from factors inherent to the game: organic surfaces (fairways, rough, greens) which constantly shift in texture and speed, hazards (water, bunkers), and external factors such as wind, atmospheric conditions (in the UK that is often rain!), and the lasting effects of previous actions (divots & pitchmarks).</p>

<p>This continuous re-evaluation of the risk profile and the available toolset can mirror the operational reality of business leadership. Strategy is rarely executed in a vacuum; it must navigate unexpected regulatory changes, geopolitical friction, rapid technological disruption, and unforeseen market reactions; all forms of corporate "winds" & "hazards." Strategy can't simply be created by focusing "on my game" & hope to be successful. There is a reason why Bryson & Rory (the two "big hitters") don't win every week.</p>

<p>The requirement for continuous strategic re-calibration, as opposed to applying a fixed playbook, makes the golf course a superior simulation for developing adaptive strategy compared to environments defined by controlled or repeatable variables. Sometimes it means taking an iron or 3-wood off the par 4 tee (not always the "Driver").</p>

<p>Meticulous planning is a pre-requisite for successful endeavors. In golf, effective planning requires analyzing the course layout, considering weather conditions, and performing an honest assessment of one's own capabilities before devising a game plan. This translates directly to the principle that the primary strategic adversary in business is the operating environment ("the market") rather than solely the direct competitor.</p>

<p>For instance, a company like McDonald's must view its competition holistically, recognizing that its market extends beyond other fast-food restaurants to include all alternative snacks, dining options and activities that compete for "time-pressured" consumers.</p>

<p>Golf is fundamentally a game of strategy and precision, built upon finding the optimal balance between risk and reward to optimize performance. This core risk calculation is central to strategy creation in business. On the course, players continually evaluate the risk-reward trade-offs of aggressive shots, such as attempting to reach a Par 5 in two strokes. This decision is made by considering numerous variables: precise carry yardages for all clubs, prevailing weather conditions, course topography, and the player's performance level on that specific day. This sophisticated, continuous risk assessment is necessary to save strokes and minimize high scores, as the downside of "going for it in 2" might be a ball no longer in play or stuck in a hazard, or by "short-siding" yourself.</p>

<p>In life sciences & pharmaceutical brand teams we often see the "strategic" focus restricted to head to head comparison of primary or efficacy point(s). This is analogous to smashing a driver ("the big dog") down the fairway & thinking you've won. Remember Rory McIlroy doesn't win every week!</p>

<p>There is an old golf adage; <strong>"Driving is for show, putting is for dough"</strong>. 25% vs 20% (on whichever endpoint/measure) sounds great to some, but if your competitor (the one's with 20% in their trial) have excellence with a different "club" (their reputation & long-term relationships, their pricing policies, their commitment to patient support & future discovery in this area etc) & with one of those "clubs" they might still hit the same par 4 green you are aiming at in regulation (2 shots) and if your second shot was a bit "off" you might be chipping onto the green with your 3rd shot. Whilst if they can putt better than you; they birdie (ball in hole for 3) & win the hole!!</p>

<p>The principles of Course Management can be formalized into a rigorous three-step framework for tactical execution and sequential decision-making in any complex, variable environment.</p>

<p><strong>Step 1: Information Gathering and Objective Analysis</strong></p>

<p>The initial step in successful strategy involves meticulous information gathering. Effective decision-making must be grounded in objective data and real user information, significantly increasing the likelihood of success compared to subjective choices based on conjecture or personal opinion. Within the life sciences industry there is now the option to contextualise all data & information into usable intelligence for future strategic decision-making via Strategy Vectors & The Patient Journey Framework.</p>

<p><strong>Step 2: Commitment and Tool Selection (The Leadership Bag)</strong></p>

<p>Following objective analysis & the connection of contextual intelligence into recognisable patterns and considering various future possibilities a decision needs to be made. The strategic leader must select the appropriate tool and commit fully to the action.</p>

<p>This is the idea of pivot points; find the fulcrum that can move the boulder. But, without the right sized lever (or tool, or investment) applied at the right time in the right way the boulder won't move. Successful leaders are equipped with their own <strong>"bag of clubs"</strong>; a diverse collection of techniques, approaches, and behaviors developed to achieve optimal outcomes across various situations.</p>

<p>Since every organizational challenge, decision, or audience is unique, achieving the best outcome requires critical assessment and selecting the precise approach. Sometimes, the situation demands a conservative, two-step approach (a safe lay-up); other times, a high-risk gamble may be necessary to push quickly toward the objective (going for the green in two).</p>

<p>The critical failure point is being a <strong>"one club leader"</strong>; relying on a single, suboptimal technique for every unique problem.</p>

<p><strong>Step 3: Execution and Continuous Review (The Sequential Chain)</strong></p>

<p>The commitment phase is critical; a strategy, once determined, must be executed with conviction. Indecision or half-hearted execution increases the probability of failure dramatically.</p>

<p>In golf, once a decision is made, the club selected & the target fixed then the only thing the player should focus on is their technique. Block out doubts, block out the discarded options, don't try too hard or swing too fast; execute the perfect shot (every time!).</p>

<p>The same can be said in business. The easiest thing is to do the execution. If you've considered all of the options and are faced with one option then you must not spread your bets too thin or fail to reach critical mass & therefore not achieve the objective. A failing of commitment not a failure of strategy.</p>

<p>We will work with teams to get past data & analysis & focus on the most effective parts of strategy development; the identification of possibilities and future scenarios and on in to better decision making.</p>
`
},
    {
        id: 'blog-2',
        title: 'The Science of Strategic Insights',
        date: '3 November, 2025',
        image: 'images/insight_aha.png',
        excerpt: 'Understanding the Cognitive Foundations and collaborative practices that transform data into contextualised intelligence and then on to insight is crucial',
        content: `<strong>The Science of Strategic Insights: How Your Brain and Your Team Generate Breakthrough Thinking (pt 1)</strong>

<p>We get asked often <em>"what do you mean by insights?"</em> And, we find ourselves commenting on articles & posts about insights which de-value the critical importance of true insight in strategy development and under-estimate the difficulty of creating <i>"real"</i> insight. Often times people use <i>"insights"</i> when they mean <i>"something interesting"</i> or a <i>"new piece of information"</i>.</p>

<p>Understanding the Cognitive Foundations and collaborative practices that transform data into contextualised intelligence and then on to insights toward competitive advantage is crucial. So, we are going to dedicate a few blogs to this topic…</p>

<p>This is part 1; where we focus on <b>"what is an insight?"</b></p>

<p>Strategic insights don't arrive through mystical inspiration. They emerge from specific neurobiological processes in your brain and deliberate collaborative practices in your teams. Understanding these mechanisms, and the barriers that block them, is essential for pharmaceutical organizations seeking to transform data into strategic advantage.</p>

<p>The gap between data-rich and insight-driven companies isn't about information access. It's about cognitive capabilities and team behaviours. While 69% of biopharma leaders believe their current model meets today's needs, only 30% feel prepared to respond to market trends through insights (Deloitte, 2024). This dangerous confidence masks a fundamental misunderstanding of how insights actually form. Here's what the science reveals about generating strategic insights and how teams can systematically develop this capability.</p>

<p>To appreciate what happens in your brain during an "Aha!" moment we must understand what qualifies as a true strategic insight. Chameleon Consulting identifies four essential characteristics that distinguish insights from mere observations or data:</p>

<ul>
<li><strong>Previously Unknown:</strong> If you knew it already, then so did your competitor—that is data or fact. An insight provides a unique viewpoint, preferably with longevity</li>
<li><strong>Driver of Behaviour:</strong> Understand stakeholder needs, get behind data and reveal fresh attitudes and behaviours. Provide some future direction and longevity</li>
<li><strong>Competitive Advantage:</strong> Reveal new ideas, words, segments, services and offerings that link with a deeper brand promise, creating fresh competitive advantage</li>
<li><strong>Immediately Actionable:</strong> The insight must drive the organization. Even if it requires new indications, lifecycle management options, etc., you should start planning now</li>
</ul>

<p>A true insight in the pharmaceutical industry needs to pass all four tests. Knowing that market share declined 3% last quarter is data. Understanding that this decline stems from a newly identified patient adherence barrier related to injection anxiety that competitors haven't addressed and that this barrier could be overcome through a nurse support program is an insight. It's previously unknown (competitors haven't recognized this specific barrier), drives behaviour (explains patient discontinuation patterns), creates competitive advantage (addressable through differentiated support), and is immediately actionable (program development can begin).</p>

<p>Strategic insights feel sudden and complete, arriving with a sense of certainty that analytic problem-solving lacks. This isn't coincidence—it reflects distinct neurobiological mechanisms. Groundbreaking research by Kounios & Beeman, reveals that insights involve the right hemisphere's anterior superior temporal gyrus, which engages in coarser semantic coding activating broader semantic fields than the left hemisphere's narrower focus. This enables connecting distant associations that focused analysis would miss. At the moment of insight, there's a burst of high-frequency gamma-band EEG activity—the brain's "Eureka!" signature. This is preceded by transient alpha-band activity that reduces visual noise, essentially closing your eyes to external distractions to facilitate retrieval of weakly activated solutions gestating below conscious awareness.</p>

<p>Insights differ fundamentally from analytic solutions in four ways:</p>

<ul>
<li>Suddenness: They arrive all-at-once, not through stepwise progress (the rigour of process gets you far; but isn't everything!)</li>
<li>No intermediate states: You don't get "partway" to an insight</li>
<li>Positive affect: The characteristic "Aha!" feeling accompanies breakthrough understanding that can then lead to real momentum across the room!</li>
<li>Higher accuracy: Webb et al. (2016) found solutions accompanied by insight are actually more likely to be correct (r=0.40-0.50) than analytically derived solutions</li>
</ul>

<p>Most remarkably, insight work happens below conscious awareness. Solution representations activate weakly long before conscious recognition. Your brain is processing patterns and connections while you're focused elsewhere—which explains why insights often arrive during showers, walks, or while falling asleep. Individual differences matter. People showing more diffuse, outward attention at rest demonstrate greater insight-solving capabilities. Positive mood facilitates insight by broadening semantic processing, making weak associations more accessible and increasing both perceptual and conceptual attention breadth.</p>

<p>The strategic implication: Organizations seeking breakthrough insights must design environments and practices that leverage these neurobiological realities—diverse stimuli to activate broader semantic fields, psychological safety to maintain positive affect, and permission for incubation time rather than relentless deadline pressure.</p>

<p>In our next blog we will focus on the core cognitive competencies required to generate better & deeper insights…</p>

<p><strong>Key References:</strong></p>
<p>Kounios, J., & Beeman, M. (2014). The cognitive neuroscience of insight. Annual Review of Psychology, 65, 71-93.<br>
Webb, M. E., Little, D. R., & Cropper, S. J. (2016). Insight is not in the problem: Investigating insight in problem solving across task types. Frontiers in Psychology, 7, 1424.<br>
Watkins, M. (2024). Six disciplines of strategic thinking. Harvard Business Review. - Day, G. S. (2011). Closing the marketing capabilities gap. Journal of Marketing, 75(4), 183-195.<br>
Lycett, M. (2013). 'Datafication': Making sense of (big) data in a complex world. European Journal of Information Systems, 22(4), 381-386.<br>
Kolko, J. (2012). Wicked problems: Problems worth solving. Austin Center for Design.<br>
Shore, Z., & McMaster, H. R. Strategic empathy: Understanding adversaries' perceptions and motivations.<br>
Kahneman, D., & Tversky, A. Judgment under uncertainty: Heuristics and biases.<br>
Deloitte. (2024). Future of biopharma commercial models survey.<br>
Stremersch, S., et al. (2024). Customer insights for innovation. Journal of the Academy of Marketing Science.<br>
Strategic Management Journal research on dynamic capabilities and organizational learning.</p>
`
    },
    {
        id: 'blog-3',
        title: "It's Time to Retire SWOT",
        date: '27 October, 2025',
        image: 'images/anti-swot.png',
        excerpt: '"Never do a SWOT analysis. And never pay attention to a SWOT analysis you happen to receive" (Roger L. Martin)',
        content: `<strong>Stop The Strategic Charade: Why It's Time to Retire SWOT Analysis</strong>
<br><em>(Estimated Read Time: 5-minutes)</em>

<p>For decades, the SWOT analysis has been a staple in boardrooms and business school classrooms. Strengths, Weaknesses, Opportunities, Threats – a simple 2x2 grid promising clarity. It feels like a foundational exercise, a rite of passage for any strategic discussion.</p>

<p><em>But what if I told you that this ubiquitous tool isn't just ineffective, but actively dangerous?</em></p>

<p>What if it's a strategic charade, giving you the illusion of insight while hindering genuine progress?</p>

<p>As a business school graduate who has spent decades working & consulting with teams on strategy creation, I've never found SWOT to be helpful, but I wanted to understand what other leading thinkers have concluded too. I've come to a stark conclusion, echoed by leading thinkers across the globe: You should never use SWOT analysis. Let's unpack why…</p>

<p><strong>The Illusion of Analysis: A Glorified To-Do List</strong></p>

<p>At its core, a typical SWOT analysis is nothing more than a glorified list. We brainstorm, fill in the boxes, and then… what? We're left with four distinct lists, often filled with vague, unprioritized bullet points.</p>

<p>Professor Ajay Sirsi, an expert in customer-centric strategy from the Schulich School of Business, argues that this isn't even analysis; it's an "aimless data collection" exercise. His work emphasizes that strategy must be "outside-in"; starting with the customer and market. SWOT, however, encourages an "inside-out" view by starting with internal Strengths and Weaknesses, making the company, not the customer, the centre of the universe. It lacks the critical step of action and leaves you with information, but no inherent mechanism for making a difficult choice or building a coherent plan.</p>

<p><strong>Empirical Evidence: SWOT as a "Bureaucratic Cul-de-Sac"</strong></p>

<p>The critique isn't just theoretical. Groundbreaking research from the UK's University of Bath in 1997, notably by Prof Terry Hill & Dr. Roy Westbrook, provided empirical evidence of SWOT's failings. In their study of 20 UK manufacturing companies, they found that:</p>

<ul>
<li>SWOT analyses generated generic, vague lists</li>
<li>There was no prioritization or validation of the listed items</li>
<li>Crucially, the outputs of the SWOT were almost never used to inform or generate actual business strategies</li>
</ul>

<p>Their conclusion was damning; <b>SWOT analysis often functions as a "bureaucratic, sterile, and ultimately futile exercise,"</b> a "cul-de-sac" that consumes valuable time and resources with no tangible strategic output. It's a performative act, not a productive one.</p>

<p><strong>Obsolete in a Complex World: The European Perspective</strong></p>

<p>Beyond specific academic studies, a pervasive sentiment in leading European business institutions like INSEAD and IMD, and among many modern consultants, is that SWOT is simply a relic. The modern business landscape is characterized by:</p>

<ul>
<li>Hyper-speed change: Strengths can become weaknesses overnight (think of a massive retail footprint before and after the e-commerce explosion)</li>
<li>Unprecedented complexity: Interconnected ecosystems, global supply chains, and rapid technological shifts cannot be captured in four static boxes</li>
<li>Need for agility: Traditional, annual SWOT-based planning cycles are far too slow for today's dynamic markets</li>
</ul>

<p>In this environment, relying on a SWOT analysis is like bringing a horse and cart to a Formula One race. It's an analogue tool in a digital world, incapable of providing the dynamic, nuanced insights required to compete and innovate.</p>

<p><strong>Bad Strategy: The SWOT Catalyst</strong></p>

<p>Richard Rumelt, author of the seminal "Good Strategy/Bad Strategy," would <b>look at a typical SWOT and see the hallmarks of "Bad Strategy."</b> His definition of good strategy includes a sharp diagnosis of a critical challenge, a guiding policy, and coherent actions.</p>

<p>SWOT, on the other hand, rarely provides any of this. <em>It's a laundry list,</em> not a diagnosis. It doesn't force the hard intellectual work of identifying the single most critical challenge your business faces. Instead, <strong>it encourages generic statements and avoids the painful trade-offs that true strategy demands.</strong> As Rumelt would contend, a strategy that starts with SWOT is <strong>often already doomed to be weak and unfocused.</strong></p>

<p><strong>The Problem of Context and Choices: Roger Martin's Disdain</strong></p>

<p>Former Rotman School of Management Dean, Roger L. Martin, is perhaps the most vocal proponent of abandoning SWOT entirely. His advice is blunt: <b>"Never do a SWOT analysis. And never pay attention to a SWOT analysis you happen to receive."</b></p>

<p>Why such a strong stance? Martin's strategic philosophy is built on making rigorous, integrated choices. A "strength," for example, is only a strength in relation to a specific "where to play" and "how to win" strategic choice. If you haven't defined these choices yet (which is usually the case when a SWOT is performed), then your "strengths" and "weaknesses" are just generic observations, devoid of strategic meaning.</p>

<p>SWOT, by generating long, unweighted lists, avoids the essential hard work of making these choices, pulling you away from building a truly impactful strategy.</p>

<p><em><strong>The Bottom Line</strong></em></p>

<p>SWOT analysis, born with good intentions to foster alignment, has devolved into a superficial exercise that often provides a false sense of strategic security. It generates lists instead of insights, avoids crucial choices, and is ill-equipped for the complexities and speeds of modern business.</p>

<p><b><strong>It's time to stop the strategic charade. For your business's future, abandon the SWOT.</strong></b></p>
`
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
