const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

// Game state to keep track of the current scene
const gameState = {
  currentScene: 'start',
};

// Scenes and choices data
const scenes = {
    start: {
        text: "It is 1896. Spain has ruled the Philippines for over 300 years. The Katipunan is preparing for revolution. What will you do?",
        choices: [
            { text: "Infiltrate the Katipunan to gather intelligence", nextScene: "TheGatheringofSecrets" },
            { text: "Join the Katipunan and offer your support", nextScene: "DecisiontoFight" }
        ]
    },

    // PATH 1: Infiltrate the Katipunan
    TheGatheringofSecrets: {
        text: "You successfully infiltrate the Katipunan. You hear Bonifacio's call for revolution.",
        choices: [
            { text: "Escape through the back alleys", nextScene: "NarrowEscape" },
            { text: "Report the Katipunan to the Spanish", nextScene: "SpanishInformer" }
        ]
    },

    // PATH 1A: Escape After Spying
    NarrowEscape: {
        text: "You evade capture and hide in a village, but Spanish soldiers are approaching.",
        choices: [
            { text: "Help villagers defend against the Spanish", nextScene: "VillageDefense" },
            { text: "Flee to the countryside to join guerrilla fighters", nextScene: "GuerrillaResistance" }
        ]
    },

    // PATH 1B: Betrayal - Informing the Spanish
    SpanishInformer: {
        text: "You report the Katipunan to the Spanish. Several leaders are arrested.",
        choices: [
            { text: "Flee the city to avoid suspicion", nextScene: "FleeingTheCity" },
            { text: "Join the Spanish military", nextScene: "SpanishAlly" }
        ]
    },
  
    FleeingTheCity: {
        text: "Realizing that the Spanish will soon suspect your involvement, you flee the city to avoid being caught. After escaping, you head towards the countryside to start fresh.",
        choices: [
            { text: "Join the guerrilla resistance in the countryside", nextScene: "GuerrillaResistance" }
        ]
    },

    // 📌 Path 1B-2: Spanish Ally (Serving the Spanish)
    SpanishAlly: {
        text: "The Spanish authorities reward you for your betrayal. You rise through the ranks and are now a low-ranking officer in the Spanish military, tasked with suppressing the revolution. You now work under Spain’s rule, but the revolution continues to burn in your heart.",
        choices: [
            { text: "Remain loyal and serve Spain", nextScene: "LoyalSpanishOfficer" },
            { text: "Turn against Spain and secretly assist the revolution", nextScene: "RebelSpy" }
        ]
    },

    // 📌 Path 1B-2A: Loyal Spanish Officer (Serving Spain)
    LoyalSpanishOfficer: {
        text: "As a loyal Spanish officer, you suppress the revolution. However, your internal conflict grows as you witness the suffering of your people. What do you do next?",
        choices: [
            { text: "Continue serving Spain and crushing the rebels", nextScene: "SpanishVictory" },
            { text: "Defect and secretly support the revolution", nextScene: "RebelSpy" }
        ]
    },
  
    SpanishVictory: {
        text: "You remain loyal to Spain. The Spanish forces crush the revolution. The Philippines remains under colonial rule, and the Filipino people must wait for another chance at freedom. The revolution is over.",
        choices: [
            { text: "Restart", nextScene: "start" }
        ]
    },

    // 📌 Path 1B-2B: Rebel Spy (Secretly Assisting the Revolution)
    RebelSpy: {
        text: "You decide to secretly assist the revolutionaries while serving in the Spanish military. You act as a double agent, passing critical information to the Katipunan while hiding your true allegiance from the Spanish.",
        choices: [
            { text: "Continue gathering intelligence and try to figure out their weakness", nextScene: "Espionage" },
            { text: "Assist the Katipunan by providing weapons and ammunition", nextScene: "FinalAssault" }
        ]
    },


    // PATH 2: Join the Katipunan
    DecisiontoFight: {
        text: "You join the Katipunan. A Spanish outpost must be attacked. What do you do?",
        choices: [
            { text: "Launch a surprise attack", nextScene: "MidnightRaid" },
            { text: "Sabotage their supplies first", nextScene: "SilentSaboteur" }
        ]
    },
  
    MidnightRaid: {
        text: "The attack on the Spanish outpost is successful, but reinforcements are on their way! What do you do?",
        choices: [
            { text: "Retreat to the mountains and regroup", nextScene: "MountainExodus" },
            { text: "Press the attack and finish off the Spanish forces", nextScene: "DecisiveBattle" }
        ]
    },

    // 📌 Path 2B: Silent Saboteur (Sabotage Supplies)
    SilentSaboteur: {
        text: "You sabotage the Spanish outpost’s supplies, weakening their hold. But a Spanish commander grows suspicious of your actions. What do you do?",
        choices: [
            { text: "Confront the commander and attempt to turn him to your side", nextScene: "Betrayer" },
            { text: "Continue sabotaging and risk being caught", nextScene: "SaboteurEscape" }
        ]
    },
      Betrayer: {
        text: "You confront the commander, trying to turn him to your side. At first, he seems intrigued, but then he betrays you. You are arrested by the Spanish forces.",
        choices: [
            { text: "Try to escape", nextScene: "Captured" },
            { text: "Accept your fate and become a martyr", nextScene: "Martyrdom" }
        ]
    },

    // Path 2B-2: Saboteur's Escape (Escaping After Sabotage)
    SaboteurEscape: {
        text: "You decide to continue sabotaging the Spanish forces, but the commander catches wind of your actions. You narrowly escape, but you are now a wanted man. You must go into hiding.",
        choices: [
            { text: "Escape to a hidden base and plan your next move", nextScene: "RebelBase" },
            { text: "Flee the area and join the guerrilla forces", nextScene: "GuerrillaResistance" }
        ]
    },

    // Path 2B-2A: Rebel Base (Planning the Next Move)
    RebelBase: {
        text: "You find refuge in a hidden base where you can plan the next step of the revolution. But the Spanish are closing in. The time to strike is coming soon.",
        choices: [
            { text: "Launch a surprise attack on a Spanish patrol", nextScene: "AmbushTactics" },
            { text: "Continue gathering intelligence and prepare for a larger assault", nextScene: "Espionage" }
        ]
    },


    // Path 2B-3: Captured (Arrested and Betrayed)
    Captured: {
        text: "You are captured by Spanish forces and sentenced to execution. Your betrayal leaves the revolution weakened, but your death becomes a rallying cry for others to continue the fight.",
        choices: [
            { text: "Restart", nextScene: "start" }
        ]
    },
  
    DecisiveBattle: {
        text: "The battle is fierce. Spanish reinforcements have arrived, and your forces are on the brink of collapse. You have a choice to make: fight for victory or retreat to regroup.",
        choices: [
            { text: "Fight until the last man", nextScene: "Martyrdom" }, 
            { text: "Retreat and regroup", nextScene: "RebelRetreat" }     
        ]
    },

    // Path 2A-2A: Martyrdom (Sacrifice for the Cause)
    Martyrdom: {
        text: "Despite your best efforts, the Spanish forces overwhelm you. You are captured and executed as a martyr. Your sacrifice inspires future generations to continue the fight for freedom.",
        choices: [
            { text: "Restart", nextScene: "start" }
        ]
    },

    // Path 2A-2B: Rebel Retreat (Regrouping for the Final Fight)
    RebelRetreat: {
        text: "You retreat to the countryside, regrouping with other rebels. The fight continues, but the Spanish are closing in. Your forces may be weakened, but hope is not lost. A final stand awaits.",
        choices: [
            { text: "Form new alliances with other resistance factions", nextScene: "NewAlliance" },
            { text: "Hide in the mountains and prepare for another battle", nextScene: "MountainHideout" }
        ]
    },
  
    NewAlliance: {
        text: "You form an alliance with other resistance factions. Together, you plan a final assault on Spanish forces, hoping to end the struggle once and for all.",
        choices: [
            { text: "Launch a coordinated attack", nextScene: "FinalAssault" },
            { text: "Strategize for long-term survival", nextScene: "RoadToVictory" }
        ]
    },

    // Path 2A-2B-2: Mountain Hideout (Preparing for the Final Push)
    MountainHideout: {
        text: "You retreat into the mountains, gathering resources and making preparations for the final battle. The revolution is not over yet.",
        choices: [
            { text: "Attack the Spanish stronghold with your new strategy", nextScene: "FinalAssault" },
            { text: "Continue building alliances and gather more forces", nextScene: "RoadToVictory" }
        ]
    },
  
    RoadToVictory: {
        text: "The revolution is gaining ground, but the Spanish are relentless. You must decide whether to make one final push for freedom or continue fighting in the mountains, gathering strength for a prolonged war.",
        choices: [
            { text: "Launch a final assault against the Spanish forces", nextScene: "FinalAssault" },
            { text: "Form a coalition with neighboring factions to prolong the revolution", nextScene: "ProlongedWar" }
        ]
    },

    // PATH 3: Village Defense (Protecting Civilians)
    VillageDefense: {
        text: "The Spanish launch a raid on the village. You must decide how to respond.",
        choices: [
            { text: "Lead a heroic stand", nextScene: "CourageousStand" },
            { text: "Evacuate the villagers and flee to the mountains", nextScene: "MountainExodus" }
        ]
    },

    CourageousStand: {
        text: "You fight bravely, inspiring others, but the Spanish are overwhelming.",
        choices: [
            { text: "Continue fighting", nextScene: "FinalAssault" },
            { text: "Retreat and regroup", nextScene: "GuerrillaResistance" }
        ]
    },

    MountainExodus: {
        text: "You escape to the mountains, but the Spanish tighten their control.",
        choices: [
            { text: "Join the Guerrilla Resistance", nextScene: "GuerrillaResistance" }
        ]
    },

    // PATH 4: Guerrilla Resistance (Fighting from the Shadows)
    GuerrillaResistance: {
        text: "You join a guerrilla force, but Spanish patrols are everywhere.",
        choices: [
            { text: "Launch ambushes", nextScene: "AmbushTactics" },
            { text: "Gather intelligence", nextScene: "Espionage" }
        ]
    },

    AmbushTactics: {
        text: "You successfully ambush the Spanish, weakening their forces.",
        choices: [
            { text: "Prepare for a final attack", nextScene: "FinalAssault" }
        ]
    },
  
    Espionage: {
        text: "You uncover Spanish weaknesses that could turn the tide of war.",
        choices: [
            { text: "Use this knowledge to attack", nextScene: "FinalAssault" }
        ]
    },

    // PATH 5: Final Assault (Decisive War for Independence)
    FinalAssault: {
        text: "Your forces launch an all-out attack on Spanish strongholds.",
        choices: [
            { text: "Attack Manila", nextScene: "Victory" },
            { text: "Fight across multiple battles", nextScene: "ProlongedWar" }
        ]
    },

    Victory: {
        text: "The Spanish surrender! The Philippines is free!",
        choices: [{ text: "Restart", nextScene: "start" }]
    },

    ProlongedWar: {
        text: "Spain is weakened, but America enters the scene...",
        choices: [{ text: "Continue the fight", nextScene: "PhilippineAmericanWar" }]
    },

    // PATH 6: The Philippine-American War (1899)
    PhilippineAmericanWar: {
        text: "With Spain defeated, America takes control. What do you do?",
        choices: [
            { text: "Trust the Americans", nextScene: "AmericanBetrayal" },
            { text: "Resist and fight for independence", nextScene: "NewStruggle" }
        ]
    },

    AmericanBetrayal: {
        text: "The Americans betray their promise of independence. The Philippines remains under colonial rule.",
        choices: [{ text: "Restart", nextScene: "start" }]
    },

    NewStruggle: {
        text: "You lead the resistance against American forces, but the fight is long and brutal.",
        choices: [
            { text: "Fight until victory", nextScene: "Victory" },
            { text: "Accept defeat", nextScene: "AmericanBetrayal" }
        ]
    }
};

// To Render Current Scene
function renderScene(sceneId) {
  const scene = scenes[sceneId];
  storyElement.textContent = scene.text;
  choicesElement.innerHTML = '';

  // Make Choice buttons dynamic
  scene.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.classList.add('choice-button');
    button.onclick = () => {
      renderScene(choice.nextScene);
    };
    choicesElement.appendChild(button);
  });
}

// Initialize the first scene
renderScene(gameState.currentScene);
