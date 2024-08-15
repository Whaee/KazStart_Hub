import folium 

m = folium.Map()

tooltip = 'Астана'
tooltip_2 = 'Алматы'

folium.Marker([51.128030, 71.430286], popup='Астана', tooltip=tooltip, icon=folium.Icon(color='purple')).add_to(m)
folium.Marker([43.237181, 76.869633], popup='Алматы', tooltip=tooltip, icon=folium.Icon(color='blue')).add_to(m)
m.save('Taddy.html')

#51.128030, 71.430286
#43.237181, 76.869633