const servers = [
    "mc.hypixel.net",
    "play.mckingcraft.net",
    "play.extremecraft.net",
    "play.reeguy.nl",
    "play.mineverse.com",
    "261.237.458.173",
    "mc.netherite.gg",
    "join.insanitycraft.net",
    "mc.advancius.net",
    "mc.advancius.net",
    "hub.opblocks.com",
    "mcs.vanillarealms.com",
    "og-network.net",
    "org.mc-complex.com",
    "mc.applecraft.org",
    "ms.loverfella.com (PAY TO WIN)",
    // Add more servers here
];

const findServerButton = document.getElementById('find-server-btn');
const serverDisplay = document.getElementById('server-display');
const serverInfoFrame = document.getElementById('server-info-frame');

findServerButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * servers.length);
    const randomServer = servers[randomIndex];
    serverDisplay.textContent = `Join server: ${randomServer}`;
    const embedUrl = `https://namemc.com/server/${randomServer}/embed`;
    serverInfoFrame.src = embedUrl;
    serverInfoFrame.style.display = 'block'; // Show the iframe
});
