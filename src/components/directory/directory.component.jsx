import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = (props) => {
  return (
    <div className='directory-container'>
      {props.categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
