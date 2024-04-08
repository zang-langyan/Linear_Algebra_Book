import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { orange, blue, teal, purple, blueGrey } from '@mui/material/colors';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

const chapterList = [
  {
    id : 1,
    title: '一. 向量与矩阵',
    sections: [
      {
        id: 11,
        title: '向量及向量组',
        path: 'chapter1/section1',
      },
      {
        id: 12,
        title: '矩阵',
        path: 'chapter1/section2',
      },
    ]
  },

  {
    id : 2,
    title: '二. 线性方程组',
    sections: [
      {
        id: 21,
        title: '线性方程组',
        path: 'chapter2/section1',
      },
      {
        id: 22,
        title: '消元法',
        path: 'chapter2/section2',
      },
      {
        id: 23,
        title: '克莱姆法则',
        path: 'chapter2/section3',
      },
      {
        id: 24,
        title: '逆矩阵',
        path: 'chapter2/section4',
      },
      {
        id: 25,
        title: 'LU分解',
        path: 'chapter2/section5',
      },
    ]
  },

  {
    id : 3,
    title: '三. 向量空间',
    sections: [
      {
        id: 31,
        title: '向量空间及其子空间',
        path: 'chapter3/section1',
      },
      {
        id: 32,
        title: '向量空间的基、维数与坐标',
        path: 'chapter3/section2',
      },
      {
        id: 33,
        title: '基变换与坐标变换',
        path: 'chapter3/section3',
      },
    ]
  },

  {
    id : 4,
    title: '四. 向量正交化',
    sections: [
      {
        id: 41,
        title: '向量内积',
        path: 'chapter4/section1',
      },
      {
        id: 42,
        title: '正交向量组',
        path: 'chapter4/section2',
      },
      {
        id: 43,
        title: '施密特正交化与正交矩阵',
        path: 'chapter4/section3',
      },
      {
        id: 44,
        title: 'QR分解',
        path: 'chapter4/section4',
      },
    ]
  }
];

export default function Toc() {
  // return (
  //   <div className="toc-container">
  //     <h1>目录</h1>
  //     <ul>
  //       {chapterList.map(chapter => (
  //         <li key={chapter.id}>
  //           <Link to={`chapter${chapter.id}/section1`}>{chapter.title}</Link>
  //           <ul>
  //             {chapter.sections.map(section => (
  //               <li key={section.id}>
  //                 <Link to={`chapter${chapter.id}/section${section.id}`}>{section.title}</Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: orange[100],
  //     },
  //     secondary: {
  //       main: blue[900],
  //     },
  //   },
  // });

  const theme = createTheme({
    typography: {
      fontSize: 15,
      fontFamily: [
        // 'Libian SC',
        // 'Xingkai SC',
        'Weibei SC',
        'STKaiTi',
        'Songti SC',
      ].join(','),
    },
    palette: {
      primary: {
        main: teal['A100'],
        // main: blueGrey[500],
        // main: purple[300],
      },
      secondary: {
        main: purple[300],
      },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <ThemeProvider theme={theme} >
      <Paper elevation={24} sx={{ width: '18%', maxWidth: 360, bgcolor: 'background.color',  backgroundColor: 'primary.dark' }} component="div">
        {/* <Paper elevation={10} sx={{ width: '80%', bgcolor: blue[200], alignContent: 'center' }} component="div"> */}

          {/* <Box sx={{width: '80%', backgroundColor: 'primary.dark'}} component="div" alignItems="center"> */}

            <Typography component="h5" variant="h5" align="center" color="black" sx={{fontFamily: 'Libian SC'}} children={'目录'}/>
            <List component="nav" aria-label="toc">

              {chapterList.map(chapter => (
                <div key={chapter.id}>
                  <ListItemButton 
                    component={Link} 
                    to={chapter.sections[0].path}
                    selected={selectedIndex === chapter.id}
                    onClick={(event) => setSelectedIndex(chapter.id)}
                  >
                    <ListItemText primary={chapter.title} />
                  </ListItemButton>
                  <List component="div" disablePadding >
                    {chapter.sections.map(section => (
                      <ListItemButton
                        key={section.id}
                        selected={selectedIndex === section.id}
                        onClick={(event) => setSelectedIndex(section.id)}
                        component={Link}
                        to={section.path}
                      >
                        <ListItemText secondary={section.title} />
                      </ListItemButton>
                    ))}
                  </List>
                  <Divider component="nav"/>
                </div> 
              ))}

            </List>

          {/* </Box> */}
        {/* </Paper> */}
      </Paper>
    </ThemeProvider>
  );
}