/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface EsriMap {
        "esriMap": __esri.Map;
        "fLayer": __esri.FeatureLayer;
        "legend": __esri.Legend;
        "mapView": __esri.MapView;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLEsriMapElement extends Components.EsriMap, HTMLStencilElement {
    }
    var HTMLEsriMapElement: {
        prototype: HTMLEsriMapElement;
        new (): HTMLEsriMapElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "esri-map": HTMLEsriMapElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface EsriMap {
        "esriMap"?: __esri.Map;
        "fLayer"?: __esri.FeatureLayer;
        "legend"?: __esri.Legend;
        "mapView"?: __esri.MapView;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "esri-map": EsriMap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "esri-map": LocalJSX.EsriMap & JSXBase.HTMLAttributes<HTMLEsriMapElement>;
        }
    }
}
