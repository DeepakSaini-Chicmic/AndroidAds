import { _decorator, Component, Node } from "cc";
import Yodo1Ads from "./Yodo1Ads";
const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
  start() {
    // Yodo1Ads.getInstance().setGDPR(true);
    Yodo1Ads.getInstance().initializeMasSdk("Zz81GomaWR", true);
  }

  initializeInterstitialAds() {
    console.log("Initialize Interstitial Ads");
    Yodo1Ads.getInstance().initializeInterstitialAds();
    console.log("Initialize Reward Ads");
    Yodo1Ads.getInstance().initializeRewardAds();
  }

  showInterstitialAds() {
    console.log("Show Interstitial Ads");
    Yodo1Ads.getInstance().showInterstitialAds();
  }

  showRewardAds() {
    console.log("Show Reward Ads");
    Yodo1Ads.getInstance().showRewardAds();
  }

  showBannerAds() {
    console.log("Show Banner Ads");
    Yodo1Ads.getInstance().loadBannerAds("Banner", "RIGHT", "TOP");
  }

  update(deltaTime: number) {}
}
