const featuredWebinars = [
  {
      title: 'Training Script for AOD-Net',
      description: 'This script trains the AOD-Net model for image dehazing using a dataset of paired clear (gt/) and hazy (hazy/) images.',
      slug: 'training-script-aod-net',
      isFeatured: true,
  },
  {
      title: 'Dataset Loading',
      description: 'Uses MyDataset to load training image pairs. Images are loaded in batches and shuffled for better training.',
      slug: 'dataset-loading',
      isFeatured: false,
  },
  {
      title: 'Training Process',
      description: 'Runs for 30 epochs, computes loss, performs backpropagation, updates model weights, and saves the trained model after each epoch.',
      slug: 'training-process',
      isFeatured: false,
  },
  {
      title: 'Execution of Training Script',
      description: 'Defines dataset paths, sets batch size to 32, epochs to 30, and starts training by calling the train() function.',
      slug: 'execution-training-script',
      isFeatured: true,
  },
  {
      title: 'Image Dehazing Script',
      description: 'Loads a trained AOD-Net model and applies it to a hazy image to generate a dehazed output.',
      slug: 'image-dehazing-script',
      isFeatured: false,
  },
  {
      title: 'Image Preprocessing',
      description: 'Loads and normalizes the hazy image, converts it to a PyTorch tensor, and prepares it for inference.',
      slug: 'image-preprocessing',
      isFeatured: true,
  },
  {
      title: 'Model Loading & Prediction',
      description: 'Loads the trained AOD-Net model, processes the hazy image, and converts the predicted output for visualization.',
      slug: 'model-loading-prediction',
      isFeatured: false,
  },
  {
      title: 'Visualization using Matplotlib',
      description: 'Displays the original hazy image and dehazed output side by side for comparison.',
      slug: 'visualization-matplotlib',
      isFeatured: true,
  },
  {
      title: 'Execution of Dehazing Script',
      description: 'Specifies a test image, processes it using dehaze_image(), and displays the result.',
      slug: 'execution-dehazing-script',
      isFeatured: false,
  }
];

export default featuredWebinars;
