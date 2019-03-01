define([], function() {
    var componentNames = [
        { 'Basic Wall:Exterior - Brick on Block:138062': 0.7},
        { 'Basic Wall:Exterior - Brick on Block:138157': 0.2},
        { 'Basic Wall:Exterior - Brick on Block:138237': 0.9},
        { 'Basic Wall:Exterior - Brick on Block:138310': 0.3},
        { 'Basic Wall:Interior - Partition (92mm Stud):138584': 0.8},
        { 'Basic Wall:Interior - Partition (92mm Stud):144518': 0.4},
        { 'Floor:127mm Slab on Grade:141232': 0.7},
        // snake2019119
        // { 'Floor:127mm Slab on Grade:143106': 0.7},
        // { 'M_Fixed:750mm x 2200mm:750mm x 2200mm:147051': 0.1},
        { 'Basic Wall:Interior - Partition (92mm Stud):139143': 0.4},
        { 'Basic Wall:Party Wall - CMU Residential Unit Dimising Wall:139234' : 0.7},
        { 'Basic Wall:Party Wall - CMU Residential Unit Dimising Wall:139347' : 0.4},
        { 'Basic Wall:Party Wall - CMU Residential Unit Dimising Wall:139374' : 0.3},
        { 'Basic Wall:Interior - Partition (92mm Stud):139682' : 0.4},
        { 'Basic Wall:Interior - Partition (92mm Stud):139783' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):139939' : 0.7},
        { 'Floor:127mm Slab on Grade:143106' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):143856' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):144518' : 0.7},


        { 'Stair:Residential - 200mm Max Riser 250mm Tread:151086' : 0.7},
        { 'Stair:Residential - 200mm Max Riser 250mm Tread:151086:1' : 0.7},
        { 'Stair:Residential - 200mm Max Riser 250mm Tread:151086:1' : 0.7},
        { 'Stair:Residential - 200mm Max Riser 250mm Tread:151086:2' : 0.7},
        { 'Railing:900mm Handrail Only:151162' : 0.7},
        { 'Railing:1100mm Guard Rail:151166' : 0.7},
        { 'Floor:Finish Floor - Wood:170352' : 0.7},
        { 'Floor:Finish Floor - Ceramic Tile:170785' : 0.7},
        { 'Floor:Finish Floor - Ceramic Tile:171230' : 0.7},
        { 'Floor:Finish Floor - Ceramic Tile:171261' : 0.7},
        { 'Floor:Finish Floor - Wood:171292' : 0.7},
        { 'Floor:Finish Floor - Ceramic Tile:171444' : 0.7},
 
        
        { 'Compound Ceiling:Gypsum Board:187149' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187462' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187470' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187483' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187508' : 0.7},
        { 'Basic Wall:Interior - Furring (152 mm Stud):189074' : 0.7},
        { 'Basic Wall:Interior - Furring (152 mm Stud):189901' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):190140' : 0.7},
        { 'Basic Wall:Interior - Furring (152 mm Stud):190774' : 0.7},
        { 'Basic Wall:Interior - Furring (152 mm Stud):190933' : 0.7},
        { 'Stair:Residential - 200mm Max Riser 250mm Tread:198878' : 0.7},
        { 'Stair:Residential - 200mm Max Riser 250mm Tread:198878:1' : 0.7},
        { 'Stair:Residential - 200mm Max Riser 250mm Tread:198878:2' : 0.7},
        { 'Railing:900mm Handrail Only:198880' : 0.7},
        { 'Railing:1100mm Guard Rail:198972' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):204300' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):204493' : 0.7},
        { 'M_W-Wide Flange:W310X60:W310X60:207325' : 0.7},
        { 'M_W-Wide Flange:W410X60:W410X60:208949' : 0.7},
        { 'M_W-Wide Flange:W310X60:W310X60:209260' : 0.7},
        { 'M_W-Wide Flange:W410X60:W410X60:209261' : 0.7},
        { 'Floor:150mm Exterior Slab on Grade:216507' : 0.7},
        { 'Floor:150mm Exterior Slab on Grade:216552' : 0.7},
        { 'M_Sofa:1830mm:1830mm:168377' : 0.7},
        { 'M_Sofa:1830mm:1830mm:168378' : 0.7},

        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162486' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162487' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162488' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162489' : 0.7},
        { 'M_Counter Top w Sink Hole:600mm Depth:600mm Depth:162490' : 0.7},
        { 'M_Counter Top:600mm Depth:600mm Depth:162491' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162493' : 0.7},
        { 'M_Counter Top:600mm Depth:600mm Depth:162494' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162495' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162496' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162497' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000 mm:1000 mm:191401' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000 mm:1000 mm:191557' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000 mm:1000 mm:191680' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000mm:1000mm:191768' : 0.7},
        { 'M_Vanity Cabinet-Double Door Sink Unit:450 x 450 mm:450 x 450 mm:205548' : 0.7},
        { 'M_Sofa:1830mm:1830mm:167283' : 0.7},
        { 'M_Sofa:1830mm:1830mm:167426' : 0.7},

        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:159159' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:159262' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:160671' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:160717' : 0.7},
        { 'M_Counter Top w Sink Hole:600mm Depth:600mm Depth:161165' : 0.7},
        { 'M_Counter Top:600mm Depth:600mm Depth:161646' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162230' : 0.7},
        { 'M_Counter Top:600mm Depth:600mm Depth:162231' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162311' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162357' : 0.7},
        { 'M_Base Cabinet-Double Door & 2 Drawer:1000mm:1000mm:162383' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000 mm:1000 mm:192153' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000 mm:1000 mm:192331' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000 mm:1000 mm:192508' : 0.7},
        { 'M_Upper Cabinet-Double Door-Wall:1000mm:1000mm:192610' : 0.7},
        { 'Basic Wall:Party Wall - CMU Residential Unit Dimising Wall:143239' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:143410' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:143478' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:143534' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:143590' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):143921' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):143960' : 0.7},
        { 'Basic Wall:Interior - Plumbing (152mm Stud):144138' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):144301' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):144586' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):144633' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):144684' : 0.7},
        { 'Basic Wall:Interior - Plumbing (152mm Stud):144783' : 0.7},
        { 'Floor:Residential - Wood Joist with Subflooring:144800' : 0.7},
        { 'Floor:Residential - Wood Joist with Subflooring:144872' : 0.7},

        { 'Floor:Finish Floor - Wood:169093' : 0.7},
        { 'Floor:Finish Floor - Wood:169188' : 0.7},
        { 'Floor:Finish Floor - Wood:169308' : 0.7},
        { 'Floor:Finish Floor - Wood:169354' : 0.7},
        { 'Floor:Finish Floor - Wood:169395' : 0.7},
        { 'Floor:Finish Floor - Wood:169701' : 0.7},
        { 'Floor:Finish Floor - Ceramic Tile:169866' : 0.7},

        { 'Compound Ceiling:Gypsum Board:187639' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187649' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187659' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187667' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187675' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187683' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187691' : 0.7},
        { 'Compound Ceiling:Gypsum Board:187701' : 0.7},
        { 'Basic Wall:Interior - Furring (152 mm Stud):193247' : 0.7},
        { 'Basic Wall:Interior - Furring (152 mm Stud):194166' : 0.7},
        { 'Basic Wall:Interior - Partition (92mm Stud):203347' : 0.7},

        { 'Basic Wall:Interior - Partition (92mm Stud):203998' : 0.7},

        { 'M_W-Wide Flange:W410X60:W410X60:209121' : 0.7},
        { 'M_W-Wide Flange:W410X60:W410X60:209166' : 0.7},
        { 'M_W-Wide Flange:W410X60:W410X60:209262' : 0.7},
        { 'M_W-Wide Flange:W410X60:W410X60:209263' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217414' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217415' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217416' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217417' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217577' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217578' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217579' : 0.7},
        { 'Basic Wall:Interior - Furring (38 mm Stud):217580' : 0.7},
        { 'M_Vanity Cabinet-Double Door Sink Unit:650 x 450 mm:650 x 450 mm:205264' : 0.7},
        { 'M_Vanity Cabinet-Double Door Sink Unit:650 x 450 mm:650 x 450 mm:205265' : 0.7},
        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:157950' : 0.7},
        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:157951' : 0.7},
        { 'M_Bed-Standard:1525 x 2007mm - Queen:1525 x 2007mm - Queen:169008' : 0.7},

        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:157983' : 0.7},
        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:157984' : 0.7},
        { 'M_Bed-Standard:1981 x 2032mm - King:1981 x 2032mm - King:168717' : 0.7},
        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:206502' : 0.7},
        { 'M_Vanity Cabinet-Double Door Sink Unit:650 x 450 mm:650 x 450 mm:204934' : 0.7},
        { 'M_Vanity Cabinet-Double Door Sink Unit:650 x 450 mm:650 x 450 mm:205239' : 0.7},
        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:158080' : 0.7},
        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:158081' : 0.7},
        { 'M_Bed-Standard:1525 x 2007mm - Queen:1525 x 2007mm - Queen:168449' : 0.7},
  
        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:157200' : 0.7},
        { 'M_Tall Cabinet-Single Door(2):800 mm:800 mm:157607' : 0.7},
        { 'M_Bed-Standard:1981 x 2032mm - King:1981 x 2032mm - King:168914' : 0.7},
    
        { 'Basic Wall:Foundation - Concrete (417mm):140479' : 0.7},
        { 'Basic Wall:Foundation - Concrete (417mm):140520' : 0.7},
        { 'Basic Wall:Foundation - Concrete (417mm):140554' : 0.7},
        { 'Basic Wall:Foundation - Concrete (417mm):140602' : 0.7},
        { 'Basic Wall:Foundation - Concrete (435mm):140913' : 0.7},
        { 'Basic Wall:Foundation - Concrete (435mm):140987' : 0.7},
        { 'Basic Wall:Foundation - Concrete (435mm):141018' : 0.7},
        { 'Wall Foundation:Bearing Footing - 900 x 300:186596' : 0.7},
        { 'Wall Foundation:Bearing Footing - 900 x 300:186604' : 0.7},
        { 'Wall Foundation:Bearing Footing - 900 x 300:186612' : 0.7},
        { 'Wall Foundation:Bearing Footing - 900 x 300:186620' : 0.7},
        { 'Wall Foundation:Bearing Footing - 900 x 300:186632' : 0.7},
        { 'Wall Foundation:Bearing Footing - 900 x 300:186644' : 0.7},
        { 'Wall Foundation:Bearing Footing - 900 x 300:186656' : 0.7},
        { 'Basic Roof:Live Roof over Wood Joist Flat Roof:184483' : 0.7},
        { 'Basic Roof:Live Roof over Wood Joist Flat Roof:184483' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:184944' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:185014' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:185064' : 0.7},
        { 'Basic Wall:Exterior - Brick on Block:185101' : 0.7},
        { 'M_Skylight:1180 x 1170mm:1180 x 1170mm:185337' : 0.7},
        { 'M_Skylight:1180 x 1170mm:1180 x 1170mm:185718' : 0.7},













        //error
        { 'M_Fixed:4835mm x 2420mm:4835mm x 2420mm:145788' : 0.7},
        { 'M_Fixed:4835mm x 2420mm:4835mm x 2420mm:146016' : 0.7},
        { 'M_Single-Flush:1250mm x 2010mm:1250mm x 2010mm:146596' : 0.7},
        { 'M_Single-Flush:1250mm x 2010mm:1250mm x 2010mm:146678' : 0.7},
        { 'M_Fixed:750mm x 2200mm:750mm x 2200mm:146885' : 0.7},
        { 'M_Fixed:750mm x 2200mm:750mm x 2200mm:147051' : 0.7},
        { 'M_Single-Flush:0762 x 2032mm:0762 x 2032mm:150173' : 0.7},
        { 'M_Single-Flush:0762 x 2032mm:0762 x 2032mm:150257' : 0.7},
        { 'M_Single-Glass 1:0813 x 2420mm:0813 x 2420mm:171853' : 0.7},
        { 'M_Single-Glass 1:0813 x 2420mm:0813 x 2420mm:171975' : 0.7},

        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:168379' : 0.7},
        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:168380' : 0.7},
        { 'M_Table-Coffee:0915 x 1830 x 0457mm:0915 x 1830 x 0457mm:168381' : 0.7},
        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:167584' : 0.7},
        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:167655' : 0.7},
        { 'M_Table-Coffee:0915 x 1830 x 0457mm:0915 x 1830 x 0457mm:168031' : 0.7},
        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:206876' : 0.7},
        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:206283' : 0.7},
        { 'M_Table-Coffee:0610 x 0610 x 0610mm:0610 x 0610 x 0610mm:206675' : 0.7},


        { 'M_Fixed:2800mm x 2410mm:2800mm x 2410mm:147686' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:147994' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:148722' : 0.7},
        { 'M_Fixed:2800mm x 2410mm:2800mm x 2410mm:149278' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:149537' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:149924' : 0.7},
        { 'M_Fixed:2800mm x 2410mm:2800mm x 2410mm:180318' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:180663' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:180864' : 0.7},
        { 'M_Fixed:2800mm x 2410mm:2800mm x 2410mm:181096' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:181285' : 0.7},
        { 'M_Fixed:819mm x 759mm:819mm x 759mm:181583' : 0.7},
        { 'M_Fixed:750mm x 2200mm:750mm x 2200mm:181930' : 0.7},
        { 'M_Fixed:750mm x 2200mm:750mm x 2200mm:182101' : 0.7},
        

        { 'M_Single-Flush:0864 x 2032mm:0864 x 2032mm:150378' : 0.7},
        { 'M_Single-Flush:0864 x 2032mm:0864 x 2032mm:150478' : 0.7},
        { 'M_Single-Flush:0864 x 2032mm:0864 x 2032mm:159734' : 0.7},
        { 'M_Single-Flush:0864 x 2032mm:0864 x 2032mm:159834' : 0.7},
        { 'M_Single-Flush:0864 x 2032mm:0864 x 2032mm:160065' : 0.7},
        { 'M_Single-Flush:0864 x 2032mm:0864 x 2032mm:160208' : 0.7},
        { 'M_Single-Flush:0762 x 2032mm:0762 x 2032mm:204034' : 0.7},
        { 'M_Single-Flush:0762 x 2032mm:0762 x 2032mm:203720' : 0.7},
        { 'M_Single-Flush:0762 x 2032mm:0762 x 2032mm:203720' : 0.7},


        { 'M_Casement:819mm x 759mm:819mm x 759mm:181548' : 0.7},
        { 'M_Casement:819mm x 759mm:819mm x 759mm:180994' : 0.7},
        { 'M_Casement:819mm x 759mm:819mm x 759mm:149736' : 0.7},
        { 'M_Casement:819mm x 759mm:819mm x 759mm:148607' : 0.7},
 //error 
       
    //error 

      

  //error 

        
   //error      
       
     //error 

       

    

    ];  

    return componentNames;
})