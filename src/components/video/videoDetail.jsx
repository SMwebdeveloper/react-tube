import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Loader, Videos } from "../";
const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState(null);
  useEffect(() => {
    ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideo(data.items[0]))
      .catch((error) => console.log(error));
    ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRelatedVideo(data.items))
      .catch((error) => console.log(error));
  }, [id]);
  if (!video?.snippet) return <Loader />;
  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box
        display={"flex"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        gap={"5px"}
      >
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          {video?.snippet?.tags?.map((item, idx) => (
            <Chip
              key={idx}
              label={item}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {video?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity: ".7" }}>
            {video?.snippet?.description}
          </Typography>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {parseFloat(video?.statistics?.viewCount).toLocaleString()} views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <FavoriteOutlined />
              {parseFloat(video?.statistics?.likeCount).toLocaleString()} likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <MarkChatRead />
              {parseFloat(
                video?.statistics?.commentCount
              ).toLocaleString()}{" "}
              comment
            </Stack>
          </Stack>
          <Stack direction={"row"} py={1} px={2}>
            <Link to={`/channel/${video?.snippet?.channelId}`}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap="5px"
                marginTop={"5px"}
              >
                <Avatar
                  src={video?.snippet?.thumbanils?.default?.url}
                  alt={video?.snippet?.channelTitle}
                />
                <Typography variant="subtitle2" color="gray">
                  {video?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
