import { world } from "@minecraft/server";

// Subscribe to a block break event
world.afterEvents.blockBreak.subscribe((event) => {
    const { player, block, brokenBlockPermutation } = event;
    // Send message to all players in the world
    world.sendMessage(`Player ${player.name} broke ${block.typeId}`);
});

// Set world time to day
world.setTimeOfDay(1000);