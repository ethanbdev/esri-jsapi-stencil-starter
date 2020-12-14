import { Component, h, Host, Prop } from "@stencil/core";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Legend from "@arcgis/core/widgets/legend";
import Search from "@arcgis/core/widgets/search";
import DotDensityRenderer from "@arcgis/core/renderers/DotDensityRenderer"

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
    // https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=visualization-dot-density
    const dotDensityRenderer = new DotDensityRenderer({
      dotValue: 100,
      outline: null,
      referenceScale: 577790, // 1:577,790 view scale
      legendOptions: {
        unit: "people"
      },
      attributes: [
        {
          field: "B03002_003E",
          color: "#f23c3f",
          label: "White (non-Hispanic)"
        },
        {
          field: "B03002_012E",
          color: "#e8ca0d",
          label: "Hispanic"
        },
        {
          field: "B03002_004E",
          color: "#00b6f1",
          label: "Black or African American"
        },
        {
          field: "B03002_006E",
          color: "#32ef94",
          label: "Asian"
        },
        {
          field: "B03002_005E",
          color: "#ff7fe9",
          label: "American Indian/Alaskan Native"
        },
        {
          field: "B03002_007E",
          color: "#e2c4a5",
          label: "Pacific Islander/Hawaiian Native"
        },
        {
          field: "B03002_008E",
          color: "#ff6a00",
          label: "Other race"
        },
        {
          field: "B03002_009E",
          color: "#96f7ef",
          label: "Two or more races"
        }
      ]
    });
    this.fLayer = new FeatureLayer({
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Population_by_Race_and_Hispanic_Origin_Boundaries/FeatureServer/2",
      minScale: 20000000,
      maxScale: 35000,
      title: "Current Population Estimates (ACS)",
      popupTemplate: {
        title: "{County}, {State}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "B03002_003E",
                label: "White (non-Hispanic)",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_012E",
                label: "Hispanic",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_004E",
                label: "Black or African American",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_006E",
                label: "Asian",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_005E",
                label: "American Indian/Alaskan Native",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_007E",
                label: "Pacific Islander/Hawaiian Native",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_008E",
                label: "Other race",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "B03002_009E",
                label: "Two or more races",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              }
            ]
          }
        ]
      },
      renderer: dotDensityRenderer
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
      zoom: 4,
      center: [-93.5, 38.5],
      highlightOptions: {
        fillOpacity: 0,
        color: [50, 50, 50]
      },
      constraints: {
        maxScale: 35000
      }
    });
    this.mapView.when(() => {
      this.createLegend();
      this.createSearch();
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
    const legend = new Legend({
      view: this.mapView
    });
    this.mapView.ui.add(legend, "bottom-right");
  }

  private async createSearch(): Promise<void> {
    const search = new Search({
      view: this.mapView
    });
    this.mapView.ui.add(search, "top-right");
  }
}
