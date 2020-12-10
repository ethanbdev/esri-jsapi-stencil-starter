import { Component, h, Host, Prop } from '@stencil/core';
import { loadModules, setDefaultOptions } from "esri-loader";

@Component({
  tag: 'esri-map',
  styleUrl: 'esri-map.css',
  shadow: true,
})
export class EsriMap {

  @Prop() esriMap: __esri.Map;
  @Prop() mapView: __esri.MapView;
  @Prop() fLayer: __esri.FeatureLayer;

  mapDiv!: HTMLDivElement;
  
  async componentWillLoad() {
    setDefaultOptions({ version: "next"});
    const [Map, FeatureLayer]: [__esri.MapConstructor, __esri.FeatureLayerConstructor] = await loadModules(["esri/Map", "esri/layers/FeatureLayer"]);
    this.esriMap = new Map({
      basemap: "dark-gray-vector",

    });
    this.fLayer = new FeatureLayer({
      url: "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/FCC_Form_477_Fixed_Broadband_June_2019_Version_1_Summary_View/FeatureServer",
      popupEnabled: true,
      outFields: ["*"]
    });
    this.esriMap.add(this.fLayer);
  }

  async componentDidLoad() {
    const [MapView]: [__esri.MapViewConstructor] = await loadModules(["esri/views/MapView"]);
    this.mapView = new MapView({
      container: this.mapDiv,
      map: this.esriMap,
      zoom: 12,
      center: [-117.2, 34.05],
    });
    this.mapView.when(() => {
      console.log("Map view is ready!");
    });
  }

  render() {
    return (
      <Host>
        <div ref={(mapEl) => this.mapDiv = mapEl as HTMLDivElement} class="map"></div>
      </Host>
    );
  }

}
