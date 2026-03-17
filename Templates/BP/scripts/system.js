import { system } from "@minecraft/server";

// Run a function on the next tick
system.run(() => {
    console.warn("Script is running on the next tick");
});

// Run a repeating task every 5 seconds (100 ticks)
const intervalId = system.runInterval(() => {
    // This code repeats
}, 100);

// Run a delayed task after 2 seconds (40 ticks)
system.runTimeout(() => {
    // This code runs once
}, 40);