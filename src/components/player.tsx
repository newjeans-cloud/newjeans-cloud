import { SolidPlyr } from "@lidarbtc/solid-plyr";
import { SourceInfo, MediaType } from "plyr";

const SOURCE: SourceInfo = {
  type: "video" as MediaType,
  sources: [
    {
      src: "NYqrWRvS8YU",
      provider: "youtube",
    },
  ],
};

const OPTIONS = {
  // ...
};

export default function Player() {
  return <SolidPlyr source={SOURCE} options={OPTIONS} />;
}
