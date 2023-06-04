Hooks.once('init', async function() {
  console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,Initializing CY_BORG 3P module,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,");

  // add our additional classes to the scvmfactory generator
  CONFIG.CY.scvmFactory.classUuids.push(
    // Dolph Apex
    "Compendium.cy-borg-3p.cyborg-3p-items.Item.KU71GxJzvn683Rt6",  
    // Dolph Data-Driver
    "Compendium.cy-borg-3p.cyborg-3p-items.Item.xVaZeiivOUgGRhqM",  
    // Dolph Echo Jammer
    "Compendium.cy-borg-3p.cyborg-3p-items.Item.B04GNL0hLeo2HzJo",  
    // Dolph Encante
    "Compendium.cy-borg-3p.cyborg-3p-items.Item.NeVAqxf63k03xBc3",  
    // Dolph Spearfish
    "Compendium.cy-borg-3p.cyborg-3p-items.Item.UgVR9BsmIpW5zg7V",  
    // Dolph Zspacer
    "Compendium.cy-borg-3p.cyborg-3p-items.Item.RmIBvP364fW67nkI",  
  );
});