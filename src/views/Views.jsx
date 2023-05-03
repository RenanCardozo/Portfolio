import React, { Suspense } from "react";
import { TOTAL_SCREENS } from "../utilities/commonUtils";

export default function Views() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <Suspense
          fallback={<div>Loading {screen.screen_name}...</div>}
          key={screen.screen_name}
        >
          <screen.component
            screenName={screen.screen_name}
            id={screen.screen_name}
          />
        </Suspense>
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return <div className="portfolio-container">{mapAllScreens()}</div>;
}
