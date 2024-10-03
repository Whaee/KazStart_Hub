import folium 
import geopandas as gpd
import pandas as pd

m = folium.Map()


folium.Marker([51.12803, 71.430286], tooltip='TechNomad', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([43.237181, 76.869633], tooltip='Nomad Foods', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([43.237029, 76.821397], tooltip='HeathTech Innovations', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([49.794273, 73.119061], tooltip='AgroTech Solutions', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([43.258181, 76.879633], tooltip='JET', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([51.128034, 71.396737], tooltip='CleanEnergyTech', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([50.279318, 57.20698], tooltip='Logistics Solutions', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([42.338244, 69.577664], tooltip='FinTech Innovate', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([42.908559, 71.358108], tooltip='FashionTech', icon=folium.Icon(color='blue')).add_to(m)
folium.Marker([49.845565, 73.176343], tooltip='TourismTech Solutions', icon=folium.Icon(color='blue')).add_to(m)
bordersStyle={
    'color': 'blue',
    'weight': 2,
    'fillColor': 'blue',
    'fillOpacity': 0.2
}

gdf1 = gpd.read_file('Jsons/kazakhstan.geojson')
gdf2 = gpd.read_file('Jsons/belarus.geojson')
gdf3 = gpd.read_file('Jsons/georgia.geojson')
gdf4 = gpd.read_file('Jsons/azerbaijan.geojson')
gdf5 = gpd.read_file('Jsons/mongolia.geojson')
gdf6 = gpd.read_file('Jsons/uzbekistan.geojson')

merged_gdf = pd.concat([gdf1, gdf2, gdf3, gdf4, gdf5, gdf6], ignore_index=True)

folium.GeoJson(merged_gdf.to_json(),
               name="JET coverage",
               show=False,
               style_function=lambda x:bordersStyle).add_to(m)

folium.LayerControl().add_to(m)

m.save('Taddy3.html')