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

  /**
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html
   */
  @Prop({ mutable: true }) esriMap: __esri.Map;

  /**
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
   */
  @Prop({ mutable: true }) fLayer: __esri.FeatureLayer;

  /**
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html
   */
  @Prop({ mutable: true }) legend: __esri.Legend;

  /**
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   */
  @Prop({ mutable: true }) mapView: __esri.MapView;

  /**
   * Div element container for our map view
   */
  private mapDiv!: HTMLDivElement;
  
  /**
   * Component lifecycle function
   * Called once, when component is first connected to DOM
   * Setup our web map and feature layer
   */
  async componentWillLoad(): Promise<void> {
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

  /**
   * Component lifecycle function
   * Called once, after component fully loaded and after first render()
   * Setup our map view and put into div
   */
  async componentDidLoad(): Promise<void> {
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

  /**
   * Render UI
   */
  render(): void {
    return (
      <Host>
        <div class="map" ref={(e) => this.mapDiv = e as HTMLDivElement} />
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
