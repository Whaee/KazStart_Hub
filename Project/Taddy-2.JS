L_NO_TOUCH = false;
L_DISABLE_3D = false;

var map_5665b0b9e5e4dc6ad53d05912339e34f = L.map(
    "map_5665b0b9e5e4dc6ad53d05912339e34f",
    {
        center: [0.0, 0.0],
        crs: L.CRS.EPSG3857,
        zoom: 1,
        zoomControl: true,
        preferCanvas: false,
    }
);

var tile_layer_d7703651d35f12284c9d5b5eb28b2f25 = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {"attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors", "detectRetina": false, "maxNativeZoom": 19, "maxZoom": 19, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
);


tile_layer_d7703651d35f12284c9d5b5eb28b2f25.addTo(map_5665b0b9e5e4dc6ad53d05912339e34f);


var marker_bed5d1d4c6542fdff907714ce2499e2f = L.marker(
    [51.12803, 71.430286],
    {}
).addTo(map_5665b0b9e5e4dc6ad53d05912339e34f);


var icon_fb4d0075df0978938a0f5cf27743188d = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "purple", "prefix": "glyphicon"}
);
marker_bed5d1d4c6542fdff907714ce2499e2f.setIcon(icon_fb4d0075df0978938a0f5cf27743188d);


var popup_218b6a0d38e10104324c99b57591f9ee = L.popup({"maxWidth": "100%"});



    var html_98bea71c0ec69fb50536ad7fae50d55a = $(`<div id="html_98bea71c0ec69fb50536ad7fae50d55a" style="width: 100.0%; height: 100.0%;">Астана</div>`)[0];
    popup_218b6a0d38e10104324c99b57591f9ee.setContent(html_98bea71c0ec69fb50536ad7fae50d55a);



marker_bed5d1d4c6542fdff907714ce2499e2f.bindPopup(popup_218b6a0d38e10104324c99b57591f9ee)
;




marker_bed5d1d4c6542fdff907714ce2499e2f.bindTooltip(
    `<div>
         Астана
     </div>`,
    {"sticky": true}
);


var marker_04941d5941fbabd1fa19513d8a070753 = L.marker(
    [43.237181, 76.869633],
    {}
).addTo(map_5665b0b9e5e4dc6ad53d05912339e34f);


var icon_31a2328d3b45bb4d52cf424863545cad = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
);
marker_04941d5941fbabd1fa19513d8a070753.setIcon(icon_31a2328d3b45bb4d52cf424863545cad);


var popup_b1618853a318d814b5ab03a2261e5270 = L.popup({"maxWidth": "100%"});



    var html_cd208f20e550ad5a07bfed094cdb48ad = $(`<div id="html_cd208f20e550ad5a07bfed094cdb48ad" style="width: 100.0%; height: 100.0%;">Алматы</div>`)[0];
    popup_b1618853a318d814b5ab03a2261e5270.setContent(html_cd208f20e550ad5a07bfed094cdb48ad);



marker_04941d5941fbabd1fa19513d8a070753.bindPopup(popup_b1618853a318d814b5ab03a2261e5270)
;




marker_04941d5941fbabd1fa19513d8a070753.bindTooltip(
    `<div>
         Алматы
     </div>`,
    {"sticky": true}
);


marker_04941d5941fbabd1fa19513d8a070753.addEventListener('click', function(){
    alert(`NAME OF ORGANIZATION
    Cost of the company:
    $102200
    +5% за ласт 2 месяца Cost of the company
    
    Number of employees:
    29
    +33% month over month
    
    Profit:
    $4000
    -8% month over month
    
    Date of foundation:
    Location:
    Achievements:`)
}
)