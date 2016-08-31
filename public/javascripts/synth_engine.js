/**
 * Created by andy on 30/08/2016.
 */
var MonoSynth = require("Tone").MonoSynth;
var synth = new MonoSynth();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");

var player = new Tone.Player("./sounds/fresh.mp3").toMaster();
//play as soon as the buffer is loaded
player.autostart = true;