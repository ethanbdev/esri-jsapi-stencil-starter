import { Component, h, Host, Prop } from "@stencil/core";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Legend from "@arcgis/core/widgets/legend";

@Component({
  tag: "esri-map",
  styleUrl: "esri-map.scss",
})
export class EsriMap {

  @Prop() esriMap: __esri.Map;
  @Prop() fLayer: __esri.FeatureLayer;
  @Prop() legend: __esri.Legend;
  @Prop() mapView: __esri.MapView;

  mapDiv!: HTMLDivElement;
  
  /**
   * Component lifecycle functions
   */
  async componentWillLoad() {
    this.esriMap = new WebMap({
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
    this.mapView = new MapView({
      container: this.mapDiv,
      map: this.esriMap,
      zoom: 12,
      center: [-117.2, 34.05],
    });
    this.mapView.when(() => {
      this.createLegend();
    });
  }

  render() {
    return (
      <Host>
        <div ref={(e) => this.mapDiv = e as HTMLDivElement} class="map"></div>
      </Host>
    );
  }

  private async createLegend(): Promise<void> {
    this.legend = new Legend({
      view: this.mapView,
    });
    this.mapView.ui.add(this.legend, "bottom-right");
  }
}
