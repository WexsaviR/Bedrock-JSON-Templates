import { world, Player } from "@minecraft/server";

// Get all players and send a private message
const players = world.getAllPlayers();
for (const player of players) {
    // Check if player has a specific tag
    if (player.hasTag("admin")) {
        player.sendMessage("Welcome back, Admin!");
    }
    // Get player velocity and location
    const velocity = player.getVelocity();
    const location = player.location;
    // Apply a knockback effect
    player.applyKnockback(0, 0, 0, 0.5);
}