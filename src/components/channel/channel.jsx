import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container } from "@mui/material";
import { ChannelCard, Videos } from "../";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // fetchin channel details
    ApiService.fetching(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]))
      .catch((error) => console.log(error));

    // fetching videos
    ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error));
  }, []);
  console.log(channelDetail);
  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Channel;
