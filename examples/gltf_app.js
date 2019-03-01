var allSelected = [];

function highlight(oid, selected, labelText='') {
    // Clicking an explorer node fits the view to its object and selects
    if (selected.length) {
        bimSurfer.viewFit({
            ids: selected,
            animate: true
        });
    }
    bimSurfer.setSelection({
        ids:selected,
        clear:true,
        selected:true,
        labelText: labelText
    });

    var obj = bimSurfer.getSelection();
}

require(["data/source.js"], function(data) {
    componentNames = data;
});
 

require([
    "bimsurfer/src/BimSurfer",
    "bimsurfer/src/StaticTreeRenderer",
    "bimsurfer/src/MetaDataRenderer",
    "bimsurfer/src/Request",
    "bimsurfer/src/Utils",
    "bimsurfer/lib/domReady!",
    // modifyied
],
function (BimSurfer, StaticTreeRenderer, MetaDataRenderer, Request, Utils) {
    var bimSurfer = new BimSurfer({
        domNode: "viewerContainer"
    });
    
    var modelName = window.location.hash;
    if (modelName.length < 1) {
        modelName = "Duplex_A_20110907_optimized";
    } else {
        modelName = modelName.substr(1);
    }
    modelName = "models/" + modelName;
    
    var tree = new StaticTreeRenderer({
        domNode: "treeContainer"
    });
    tree.addModel({id: 1, src: modelName + ".xml"});
    tree.build();
    
    tree.on("click", highlight);
    
    var data = new MetaDataRenderer({
        domNode: "dataContainer"
    });
    data.addModel({id: 1, src: modelName + ".xml"});
    
    bimSurfer.load({
        src: modelName + ".gltf"
    }).then(function (model) {
        // modifyied
        
        var scene = bimSurfer.viewer.scene;
        
        var aabb = scene.worldBoundary.aabb;
        var diag = xeogl.math.subVec3(aabb.slice(3), aabb, xeogl.math.vec3());
        var modelExtent = xeogl.math.lenVec3(diag);
    
        scene.camera.project.near = modelExtent / 1000.;
        scene.camera.project.far = modelExtent * 100.;
       
        scene.camera.view.eye = [-1,-1,5];
        scene.camera.view.up = [0,0,1];
        bimSurfer.viewFit({centerModel:true});
        
        bimSurfer.viewer.scene.canvas.canvas.style.display = 'block';

    });

    bimSurfer.on("selection-changed", function(selected) {
        // bimSurfer.reset({ ids: selected.objects, visibility: true })

        data.setSelected(selected.objects.map(function(id) {
            return Utils.CompressGuid(id.split("#")[1].substr(8, 36).replace(/-/g, ""));
        }));

        var modelElements = {};
        var labels = tree.getLabelElements();
        for (var i = 0; i < labels.length; i += 1) {
            var modelID = bimSurfer.getModelID(labels[i].id);
            if (modelID !== '') {
                modelElements[modelID] = { labelText: labels[i].labelText };
            }
        }

        bimSurfer.reset({ colors: true });
        for (var idx = 0; idx < componentNames.length; idx += 1) {
            if (Object.keys(componentNames[idx])[0] == modelElements[selected.objects[0]].labelText) {
                allSelected = allSelected.concat(selected.objects);

                bimSurfer.setColor({
                    ids: selected.objects,
                    color: [0, 0, 1, Object.values(componentNames[idx])[0]],
                });
                
                alert(modelElements[selected.objects[0]].labelText + ' Component is clicked and it\'s uncertainty is ' + Object.values(componentNames[idx])[0]);
                var element = document.getElementById("colorpicker");
                element.classList.add("active");

                var colorElement =document.getElementById("background-color")
                colorElement.style.backgroundColor = "rgba(" + [0, 0, 255, Object.values(componentNames[idx])[0]].join(',') + ")";
                document.getElementById("text-label").innerHTML = 'Uncertainty is ' + Object.values(componentNames[idx])[0];


                setTimeout(function() {
                    element.classList.remove("active");
                }, 4000);

                // bimSurfer.clear();

                // var colorListElements = document.getElementById("colorlist");
                // colorListElements.innerHTML = '';

                // for (var delta = 0; delta <= 1; delta += 0.1) {
                //     var colorItem = document.createElement("div");
                //     colorItem.className = "color-list";

                //     var childTitleElement = document.createElement("span");
                //     childTitleElement.className = "text-label";
                //     childTitleElement.innerHTML = delta.toFixed(1) + ' = ';

                //     var childColorElement = document.createElement("span");
                //     childColorElement.className = "background-color";
                //     childColorElement.style.backgroundColor = "rgba(" + [0, 255, 0, delta].join(',') + ")";

                //     colorItem.appendChild(childTitleElement);
                //     colorItem.appendChild(childColorElement);

                //     colorListElements.appendChild(colorItem);
                // }
            }
        }
    });
    
    // Lets us play with the Surfer in the console
    window.bimSurfer = bimSurfer;
});