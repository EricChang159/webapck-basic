// import path from 'path'
// import initStoryshots,{multiSnapshotWithOptions} from '@storybook/addon-storyshots'

// initStoryshots()
// initStoryshots({
//     framework: 'vue',
//     configPath: path.join(__dirname,'./Jest.config.js'),
//     integrityOptions: { cwd: path.join(__dirname, '/stories') },
//     test: multiSnapshotWithOptions(),
//   });
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots();