import React, {  FC } from 'react';
import "./App.css"

import ChipInputComponent from './ChipInputComponent';

// interface TagsInputProps {
//   selectedTags: (tags: string[]) => void;
//   tags: string[];
// }

// const TagsInput: FC<TagsInputProps> = (props) => {
//   const [tags, setTags] = React.useState<string[]>(props.tags);
  
//   const removeTags = (indexToRemove: number) => {
//     setTags([...tags.filter((_, index) => index !== indexToRemove)]);
//   };

//   const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter" && event.currentTarget.value !== "") {
//       setTags([...tags, event.currentTarget.value]);
//       props.selectedTags([...tags, event.currentTarget.value]);
//       event.currentTarget.value = "";
//     }
//   };

//   return (
//     <div className="tags-input">
//       <ul id="tags">
//         {tags.map((tag, index) => (
//           <li key={index} className="tag">
//             <span className='tag-title'>{tag}</span>
//             <span className='tag-close-icon'
//               onClick={() => removeTags(index)}
//             >
//               x
//             </span>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         onKeyUp={addTags}
//         placeholder="Press enter to add tags"
//       />
//     </div>
//   );
// };

const App: FC = () => {
  // const selectedTags = (tags: string[]) => {
  //   console.log(tags);
  // };

  return (
    <div className="App">
      <h1 className='heading'>Pick Users</h1>
      {/* <TagsInput selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/> */}
      <ChipInputComponent/>
    </div>
  );
};

export default App;