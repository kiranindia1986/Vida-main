import { useState } from 'react';
import FaceSmileIcon from '@untitled-ui/icons-react/build/esm/FaceSmile';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmojiPicker from 'emoji-picker-react';
import { useMockedUser } from 'src/hooks/use-mocked-user';
import { getInitials } from 'src/utils/get-initials';
import { AudioRecorder } from 'react-audio-voice-recorder';

export const BlogAddNewComments = (props) => {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const user = useMockedUser();

  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState('');

  const onEmojiClick = (emojiObject, e) => {
    setInputStr((prevInput) => prevInput + emojiObject?.emoji);
    setShowPicker(false);
  };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    audio.id = new Date().getTime();
    console.log(audio, 'audio');
    document.getElementById('audio-files').appendChild(audio);
  };

  return (
    <div {...props}>
      <Stack
        alignItems="flex-start"
        direction="row"
        spacing={2}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 40,
            width: 40,
          }}
        >
          {getInitials(user.name)}
        </Avatar>
        <Stack
          spacing={3}
          sx={{ flexGrow: 1 }}
        >
          <TextField
            fullWidth
            multiline
            placeholder="Type your reply"
            rows={3}
            variant="outlined"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
            >
              {!smUp && (
                <IconButton>
                  <SvgIcon>
                    <PlusIcon />
                  </SvgIcon>
                </IconButton>
              )}
              {smUp && (
                <>
                  <IconButton>
                    <SvgIcon>
                      <FaceSmileIcon onClick={() => setShowPicker((val) => !val)} />
                    </SvgIcon>
                  </IconButton>
                  {/* <IconButton>
                    <AudioRecorder
                      onRecordingComplete={addAudioElement}
                      audioTrackConstraints={{
                        noiseSuppression: true,
                        echoCancellation: true,
                      }}
                      downloadOnSavePress={true}
                      downloadFileExtension="webm"
                    />
                  </IconButton> */}
                </>
              )}
            </Stack>

            <div>
              <Button variant="contained">Send</Button>
            </div>
          </Stack>
        </Stack>
      </Stack>
      {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
      {/* <div id="audio-files"></div> */}
    </div>
  );
};
