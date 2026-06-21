// Weapon Properties
Hooks.once("init", () => {
  CONFIG.DND5E.itemProperties.recoil = {
    label: "Recoil",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("recoil");

  CONFIG.DND5E.itemProperties.cooldown = {
    label: "Cooldown",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("cooldown");
  
  CONFIG.DND5E.itemProperties.destructible = {
    label: "Destructible",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("destructible");

  CONFIG.DND5E.itemProperties.adaptable = {
    label: "Adaptable",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("adaptable");

  CONFIG.DND5E.itemProperties.attached = {
    label: "Attached",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("attached");

  CONFIG.DND5E.itemProperties.loud = {
    label: "Loud",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("loud");

  CONFIG.DND5E.itemProperties.pugilist = {
    label: "Pugilist",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("pugilist");
});

Hooks.once("init", () => {
  CONFIG.DND5E.featureTypes.class.subtypes.adventurersTalent = "Adventurer's Talent";
  CONFIG.DND5E.featureTypes.class.subtypes.Lichdom = "Lichdom";
  CONFIG.DND5E.featureTypes.class.subtypes.Discovery = "Discovery";
  CONFIG.DND5E.featureTypes.class.subtypes.bombFormula = "Bomb Formula";
  CONFIG.DND5E.featureTypes.class.subtypes.psionicDiscipline = "Psionic Discipline";
  CONFIG.DND5E.featureTypes.class.subtypes.Tricks = "Trick";
  CONFIG.DND5E.featureTypes.class.subtypes.Trinket = "Trinket";
  CONFIG.DND5E.featureTypes.class.subtypes.magicTattoo = "Magic Tattoo";
  CONFIG.DND5E.featureTypes.class.subtypes.secret = "Secret";
  CONFIG.DND5E.featureTypes.class.subtypes.grandHex = "Grand Hex";
  CONFIG.DND5E.featureTypes.class.subtypes.Hex = "Hex";
  CONFIG.DND5E.featureTypes.class.subtypes.curse = "Curse";
  CONFIG.DND5E.featureTypes.class.subtypes.compound = "Compound";
  CONFIG.DND5E.featureTypes.class.subtypes.misfortune = "Misfortune"
  CONFIG.DND5E.featureTypes.class.subtypes.monstrousGraft = "Monstrous Graft"
});

// Adds new Weapon types
Hooks.once("init", () => {
  CONFIG.DND5E.weaponIds.revolver = "Compendium.the-convergence-shared-compendium.items.Item.MJO8FjtDBWZaMXZl";
  CONFIG.DND5E.weaponIds.blunderbuss = "Compendium.the-convergence-shared-compendium.items.Item.L8VlUVop5t4z6z6o";
  CONFIG.DND5E.weaponIds.musket = "Compendium.the-convergence-shared-compendium.items.Item.FZlEqOvkLN057uou";
  CONFIG.DND5E.weaponIds.cannon = "Compendium.the-convergence-shared-compendium.items.Item.sndoFSFc2tXmgmd5";
  CONFIG.DND5E.weaponIds.gatlingGun = "Compendium.the-convergence-shared-compendium.items.Item.VrFyA0gJIpZqhkl6";
  CONFIG.DND5E.weaponIds.doubleBarrelShotgun = "Compendium.the-convergence-shared-compendium.items.Item.NoHoUQ81O13ZWFCz";
  CONFIG.DND5E.weaponIds.huntingRifle = "Compendium.the-convergence-shared-compendium.items.Item.x3RCqxH5EH4UQJfn";
  CONFIG.DND5E.weaponIds.parlorGun = "Compendium.the-convergence-shared-compendium.items.Item.mLwmWKKrZJb4fBtM";
  CONFIG.DND5E.weaponIds.bomb = "Compendium.the-convergence-shared-compendium.items.Item.dC2mB73utTxPESC0";
  CONFIG.DND5E.weaponIds.katana = "Compendium.the-convergence-shared-compendium.items.Item.xy3pTgnVJ3648VNV";
  CONFIG.DND5E.weaponIds.claws = "Compendium.the-convergence-shared-compendium.items.Item.cxRFHXI8Z6hAcp7f"
  CONFIG.DND5E.weaponIds.knuckleduster = "Compendium.the-convergence-shared-compendium.items.Item.LvqjfARoGsnkJYF3";
  CONFIG.DND5E.weaponIds.nunchaku = "Compendium.the-convergence-shared-compendium.items.Item.7AGABjYOdH4JrTcc";
  CONFIG.DND5E.weaponIds.tetherhook = "Compendium.the-convergence-shared-compendium.items.Item.Hr5aBVHzOPxS6YLO";
  CONFIG.DND5E.weaponIds.twinblades = "Compendium.the-convergence-shared-compendium.items.Item.BecLeHwh6zcCnhXY";
});

Hooks.once("init", () => {
  CONFIG.DND5E.featureTypes.feat.subtypes.wildTalent = "Wild Talent Feat";
  CONFIG.DND5E.featureTypes.feat.subtypes.perk = "Perk";
  CONFIG.DND5E.featureTypes.feat.subtypes.speciesFeat = "Species Feat"
});

Hooks.once("init", () => {
CONFIG.DND5E.weaponMasteries.automatic = {
    label: "Automatic",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.A5THHryGktNbaTXW"};
CONFIG.DND5E.weaponMasteries.bludgeon = {
    label: "Bludgeon",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.DAAlrIXCYzfI3YKT"};
CONFIG.DND5E.weaponMasteries.explode = {
    label: "Explode",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.7T5wQTANskJ2KBOe"};
CONFIG.DND5E.weaponMasteries.jolt = {
    label: "Jolt",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.G69x0xTGrdtUOsWG"};
CONFIG.DND5E.weaponMasteries.mounted = {
    label: "Mounted",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.t6WFNOLNRJ880JI4"};
CONFIG.DND5E.weaponMasteries.overheat = {
    label: "Overheat",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.wJMS3zy3ERbCeop2"};
CONFIG.DND5E.weaponMasteries.scatter = {
    label: "Scatter",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.zbaWlUlXm0nsOPZN"};
CONFIG.DND5E.weaponMasteries.sighted = {
    label: "Sighted",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.LH4DglCFEQm41vBC"}
});

Hooks.once("init", () => {
  CONFIG.DND5E.ammoIds.cannonball = "Compendium.the-convergence-shared-compendium.items.Item.cYLNQCifIsRYBaLo";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.cannonball = "Cannonball";
  CONFIG.DND5E.ammoIds.shell = "Compendium.the-convergence-shared-compendium.items.Item.lWpp1t9xUWNrAvBZ";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.shells = "Shells";
  CONFIG.DND5E.ammoIds.shot = "Compendium.the-convergence-shared-compendium.items.Item.dYuj8lRX1XoRgJxi";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.shot = "Shot";
  CONFIG.DND5E.ammoIds.flares = "Compendium.the-convergence-shared-compendium.items.Item.V9KzBIWsm1yjW41A";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.flares = "Flares";
});

const SPELLBRANDING_SLOT_TABLE = [
      [],
      [],
      [1],
      [1],
      [1],
      [1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
];

Hooks.once("init", () => {
CONFIG.DND5E.spellcasting.vagabond = {
  label: "Vagabond Mage Brand",
  type: "multi",
  cantrips: true,
  prepares: true,
  order: 50,
  progression: {
    vagabond: {
      label: "Spellbranding",
      divisor: 1,
      roundUp: true
    }
  },
  table: SPELLBRANDING_SLOT_TABLE
}
});

Hooks.once("init", () => {
CONFIG.DND5E.spellcasting.warmage = {
  label: "Warmage",
  type: "multi",
  cantrips: true,
  prepares: true,
  order: 50,
  progression: {
    warmage: {
      label: "Warmage",
      divisor: 1,
      roundUp: true
    }
  },
};
});

Hooks.once("init", () => {
  CONFIG.DND5E.lootTypes.harvest = "Harvested Material";

    CONFIG.DND5E.itemProperties.hair = {
    label: "Hair",
  };
  CONFIG.DND5E.validProperties.loot.lootTypes.harvest.add("hair");
});

Hooks.once("init", () => {
  CONFIG.DND5E.spellSchools.chronomancy = {
    label: "Chronomancy",
    icon: "modules/the-convergence-dark-matter/assets/icons/svg/schools/chronomancy.svg",
    fullKey: "Chronomancy", // Full key used in enrichers
    reference: "Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.smEk7kvVyslFozrB" // UUID of journal entry page for rich tooltips
  };
});

Hooks.once("init", () => {
  CONFIG.DND5E.tools.vintner = {
    ability: "int",
    id: "Compendium.the-convergence-shared-compendium.items.Item.8mVsc2eYZmrHYgos"
  }
});

Hooks.on("dnd5e.restCompleted", async (actor, result) => {
    // 1. We only care if this was a Long Rest
    if (!result.longRest) return;

    // 2. Scan the actor for any items carrying our custom invisible flag
    const inertPotions = actor.items.filter(i => i.flags?.alchemist?.isBrewed);

    // 3. If they have none, do nothing and exit quietly
    if (inertPotions.length === 0) return;

    // 4. Gather the unique IDs of all the expired potions
    const idsToDelete = inertPotions.map(i => i.id);

    // 5. Delete them from the character sheet in one clean database operation
    await actor.deleteEmbeddedDocuments("Item", idsToDelete);

    // 6. Post a neat little thematic message to the chat
    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor }),
        content: `<span style="color: purple; font-style: italic;">The magic within <strong>${actor.name}'s</strong> brewed concoctions fades, rendering them inert...</span>`
    });
});

Hooks.once("init", () => {
    CONFIG.DND5E.featureTypes.bombFormula = {
        label: "Bomb Formulae"
    };
});