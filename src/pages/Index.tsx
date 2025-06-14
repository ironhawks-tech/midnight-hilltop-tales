
import StoryScene from '../components/StoryScene';
import IntroScene from '../components/IntroScene';
import DogsScene from '../components/DogsScene';
import RunningScene from '../components/RunningScene';
import SearchScene from '../components/SearchScene';
import ReunionScene from '../components/ReunionScene';
import ApologyScene from '../components/ApologyScene';
import EndingScene from '../components/EndingScene';

const Index = () => {
  return (
    <div className="relative">
      <IntroScene />
      <DogsScene />
      <RunningScene />
      <SearchScene />
      <ReunionScene />
      <ApologyScene />
      <EndingScene />
    </div>
  );
};

export default Index;
