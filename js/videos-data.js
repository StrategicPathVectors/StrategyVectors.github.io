// Videos Data for Strategy Vectors Website
// This file contains all video information in one central location
// To add a new video: Add a new entry at the TOP of the videosData array
// The date determines which videos appear as "most recent" on the homepage

const videosData = [
    {
        id: "video-1",
        youtubeId: "https://muse.ai/embed/1PSeih6", // Replace with actual YouTube video ID
        title: "Strategy Vectors Podcast",
        description: "Discover how we are aiming to revolutionise strategy development using AI-powered insights and contextualised market intelligence to identify transformational pivot points.",
        date: "October 2025",
        duration: "8 min",
        // The dateOrder is used for sorting - format: YYYYMMDD
        // This ensures videos appear in the correct chronological order
        dateOrder: 20250315
    },
    {
        id: "video-2",
        youtubeId: "https://muse.ai/vc/JdR5GCR", // Replace with actual YouTube video ID
        title: "A Peek Inside The Machine",
        description: "See how our unified patient journey is built in order to identify critical intelligence & drive fresh insights & stimulate new strategic discussions",
        date: "September 2025",
        duration: "4 min",
        dateOrder: 20250228
    },
    {
        id: "video-3",
        youtubeId: "PLACEHOLDER", // Special marker for placeholder videos
        title: "Future Content",
        description: "We're constantly creating new content. Check back soon for more on Strategy Vectors & The Patient Journey Framework",
        date: "Upcoming",
        duration: "TBD",
        dateOrder: 20250101, // Give it a date so it appears as the third video
        isPlaceholder: true // Special flag to indicate this is a placeholder
    }
];

// Note: When you're ready to add a real video as the third one, simply:
// 1. Change youtubeId from "PLACEHOLDER" to the actual YouTube video ID
// 2. Update the title, description, date, and duration
// 3. Set isPlaceholder to false (or remove that line entirely)
// 4. Update dateOrder to the actual date in YYYYMMDD format

// Example of how to add a NEW video at the top:
// Just copy this template, fill in your details, and paste it at the very top of the videosData array:
/*
{
    id: "video-4", // Increment the number
    youtubeId: "abc123xyz", // Your YouTube video ID
    title: "Your Video Title Here",
    description: "Your video description here.",
    date: "April 2025",
    duration: "10 min",
    dateOrder: 20250415 // Format: YYYYMMDD
},
*/
