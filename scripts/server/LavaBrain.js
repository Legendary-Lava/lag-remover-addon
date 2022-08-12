let system = server.registerSystem(0, 0);
function execute(command) {
    function commandCallBack(commandResults) {
    } 
    system.executeCommand(command, (commandResults) => commandCallBack(commandResults))
}
execute(`gamerule sendcommandfeedback false`)
execute(`gamerule dodaylightcycle false`)
execute(`gamerule doweathercycle false`)
execute(`gamerule mobgriefing false`)
execute(`gamerule randomtickspeed 0`)
execute(`gamerule dofiretick false`)
execute(`gamerule domobspawning false`)
execute(`gamerule showdeathmessages false`)
execute(`gamerule dotiledrops false`)
execute(`gamerule tntexplodes false`)
execute(`difficulty peaceful`)
execute(`mobevent events_enabled false`)
//execute(`setmaxplayers 14`)
execute(`gamerule spawnradius 0`)
execute(`gamerule doentitydrops false`)
execute(`gamerule domobloot false`)
execute(`say to make someone immune to the anti grief/lag system do /tag <whoever> add vip`)
system.update = function() {
execute(`clear @a[tag=!vip] end_crystal`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] cod_bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] lava_bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] pufferfish_bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] salmon_bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] tropical_fish_bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] water_bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] tadpole_bucket`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] axolotl_bucket`)
execute(`clear @a[tag=!vip] respawn_anchor`)
execute(`clear @a[tag=!vip] fire_charge`)
execute(`clear @a[tag=!vip] arrow`)
execute(`clear @a[tag=!vip] potion 7`)
execute(`clear @a[tag=!vip] potion 8`)
execute(`clear @a[tag=!vip] lingering_potion`)
execute(`clear @a[tag=!vip] splash_potion`)
execute(`clear @a[tag=!vip] experience_bottle`)
execute(`execute @a[type=!vip] ~ ~ ~ clear @s[x=~,y=320,z=~,r=364] sponge`)
//execute(``)
//execute(``)
//execute(``)
}

system.shutdown = function() {

}
