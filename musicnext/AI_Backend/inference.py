# import torch
# import torch.optim
# import numpy as np
# from PIL import Image
# import matplotlib.pyplot as plt

# def dehaze_image(image_name):
#     data_hazy = Image.open(image_name)
#     data_hazy = np.array(data_hazy) / 255.0
#     original_img = data_hazy.copy()

#     data_hazy = torch.from_numpy(data_hazy).float()
#     data_hazy = data_hazy.permute(2, 0, 1)
#     data_hazy = data_hazy.unsqueeze(0)

#     dehaze_net = torch.load('saved_models/dehaze_net_epoch_17.pth', map_location=torch.device('cpu') , weights_only=False)

#     clean_image = dehaze_net(data_hazy).detach().numpy().squeeze()
#     clean_image = np.swapaxes(clean_image, 0, 1)
#     clean_image = np.swapaxes(clean_image, 1, 2)

#     plt.subplot(1, 2, 1)
#     plt.imshow(original_img)
#     plt.axis('off')
#     plt.title('Original Image')

#     plt.subplot(1, 2, 2)
#     plt.imshow(clean_image)
#     plt.axis('off')
#     plt.title('Dehaze Image')
#     plt.show()


# if __name__ == '__main__':
#     img_name = './test_images/test9.jpg'
#     dehaze_image(img_name)


import torch
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
from model import AODNet  # Import Model

# Load Model
dehaze_net = AODNet()
checkpoint_path = 'saved_models/dehaze_net_epoch_17.pth'
dehaze_net.load_state_dict(torch.load(checkpoint_path, map_location=torch.device('cpu')), strict=False)
dehaze_net.eval()

def dehaze_image(image_name):
    img = Image.open(image_name).convert("RGB")
    img = np.array(img) / 255.0
    original_img = img.copy()

    img = torch.from_numpy(img).float().permute(2, 0, 1).unsqueeze(0)

    with torch.no_grad():
        clean_image = dehaze_net(img).squeeze().permute(1, 2, 0).numpy() * 255

    plt.subplot(1, 2, 1)
    plt.imshow(original_img)
    plt.axis('off')
    plt.title('Original Image')

    plt.subplot(1, 2, 2)
    plt.imshow(clean_image.astype(np.uint8))
    plt.axis('off')
    plt.title('Dehazed Image')
    plt.show()

if __name__ == '__main__':
    img_name = './test_images/test9.jpg'
    dehaze_image(img_name)

