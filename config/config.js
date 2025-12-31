/**
 * OpenSource 2025 AeroX
 * Code by itsfizys
 * AeroX Development
 * 
 * Kali Billi Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Bot invite link - users will be redirected here when clicking "Invite Kali Billi"
  botInviteUrl: "",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.com/oauth2/authorize?client_id=1439211049856405536",
  
  // Bot name (for display)
  botName: "ZentroX",
  
  // Bot description
  botDescription: "Your Best Discord Companion - Music, Fun, moderation, and AI chat for your Discord server."
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
