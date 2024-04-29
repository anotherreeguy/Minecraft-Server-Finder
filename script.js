const servers = [
    "mcsl.huabacraft.com",
    "akumamc.net",
    "MCSL.PURPLE.WTF",
    "play.anubismc.com",
    "msl.extremecraft.net",
    "mc.lotc.co",
    "skyblock.net",
    "mcsl.lemoncloud.net",
    "msl.simplesurvival.gg",
    "LeoneMC.net",
    "msl.ccnetmc.com",
    "budgie.network",
    "sl.minecadia.com",
    "mcsl.vortexnetwork.net",
    "i.nebulamc.gg",
    "msl.ultimis.net",
    "play.wildprison.net",
    "play.fishonmc.net",
    "play.cubecraft.net",
    "mcsl.twerion.net",
    "minecraftonline.com",
    "trappedmc.com",
    "Play.PokeFind.co",
    "play.cobbleland.com",
    "mcsl.gtm.network",
    "join.mccentral.org",
    "mcsl.haycube.net",
    "play.rulercraft.com",
    "msl.mc-blaze.com",
    "mc.mcs.gg",
    "mcsl.oneblockmc.com",
    "fly.mineland.net",
    "go.mineberry.org",
    "mcsl.minewave.net",
    "fun.oplegends.com",
    "msl.strongcraft.org",
    "armamc.com",
    "play.jackpotmc.com:57846",
    "play.cobblemonislands.com",
    "mc.gamster.org",
    "mc.safesurvival.net",
    "play.boxpvp.net",
    "mcsl.semisurvivalcraft.com",
    "msl.applemc.fun",
    "Play.Performium.co",
    "sl.swancraftmc.com",
    "mcsl.orchardcraftmc.com",
    "play.ve-mc.com",
    "play.togethercraft.online",
    "join.ventureland.net",
    "cobble.pokeclash.com",
    "play.lokamc.com",
    "epic.newwindserver.com",
    "mcsl.zedarmc.com",
    "play.emc.gs",
    "msl.pokehub.org",
    "play.foxsmp.net",
    "mc.serizon.net",
    "nohub.playcdu.co",
    "play.alttd.com"
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
