Project Report


                                       Cancer Vision: Advanced Breast Cancer Prediction with Deep Learning
                        
                         Breast cancer is one of the main causes of cancer death worldwide. Computer-aided diagnosis systems showed potential for improving the diagnostic accuracy. But early detection and prevention can significantly reduce the chances of death. It is important to detect breast cancer as early as possible. The goal is to classify images into two classifications of malignant and benign. As early diagnostics significantly increases the chances of correct treatment and survival. In this application we are helping the doctors and patients to classify the Type of Tumour for the specific image given with the help of Neural Networks.                                        
Deep Learning Concepts:
                CNN: a convolutional neural network is a class of deep neural 
networks, most commonly applied to analysing visual imagery.
CNN Basic
                Flask: Flask is a popular Python web framework, meaning it is a 
third-party Python library used for developing web applications.  
Flask Basics If you are using Pycharm IDE, you can install the packages 
through the command prompt and follow the same syntax as above.
Prior Knowledge:
We should have prior knowledge of following topics to complete this project.
     Deep Learning Concept
     CNN
     Flask: Flask is a popular Python web framework, meaning it is a thirdparty Python library used for developing web applications.

Project Objectives:
By the end of this project, we will:
 Know fundamental concepts and techniques of Convolutional Neural 
Network.
 Gain a broad understanding of image data.
 Know how to pre-process/clean the data using different data 
preprocessing techniques.
 know how to build a web application using the Flask framework  

 Project Flow:
 The user interacts with the UI (User Interface) to choose the image.
 The chosen image analysed by the model which is integrated with flask 
application.
 CNN Models analyse the image, then prediction is showcased on the 
Flask UI.

To accomplish this, we have to complete all the activities and tasks listed 
below
 Data Collection.
 Create Train and Test Folders.
 Data Preprocessing.
 Import the ImageDataGenerator library.
 Configure ImageDataGenerator class.
 ApplyImageDataGenerator functionality to Trainset and Test set.
 Model Building.
 Import the model building Libraries.
 Initializing the model.
 Adding Input Layer.
 Adding Hidden Layer.
 Application Building
 Create an HTML file
 Build Python Code

 The dataset folder (breastcancerdataset) contains two folders test and 
train, each of them having benign and malignant tumour images.
 Flask folder has all the files necessary to build the flask application.
 static folder has the images that are needed in building the web page.
 Templates folder has the HTML page.
 Uploads folder has the uploads made by the user.
 app.py is the python script for server-side computing.
 .h5 file is the model file which is to be saved after model building.
 Breast-Training.ipynb and Breast-Testing.ipynb are the training and 
testing notebooks.

Data Collection:
 There are many popular open sources for collecting the data. 
E.g.: kaggle.com, UCI repository, etc
Download The Dataset:
The dataset used for this project is in this link. Please refer to the link to 
download the dataset. In this dataset, there are two classes of images 
people having breast cancer( represented with folder 1) people not 
having a Breast cancer(represented with 0).In our project according to 
project structure, create train test folders and in them, place "0" folderimages in benign and place "1" folder images in Malignant in train and 
test folders respectively as shown in project structure.

Image Preprocessing:
 In this milestone we will be improving the image data that suppresses unwilling distortions or enhances some image features important for 
further processing, although perform some geometric transformations of images like rotation, scaling, translation, etc.

Import ImageDataGenerator Library and Configure It
Activity 1: Import ImageDataGenerator Library and Configure it
ImageDataGenerator class is used to load the images with different modifications like considering the zoomed image, flipping the image and rescaling the images to range of 0 and 1.

Apply ImageDataGenerator Functionality To Train And Test Set
Specify the path of both the folders in flow_from_directory method.

Model Building:
The neural network model is to be built by adding different network layers like convolution, pooling, flattening, dropout and neural layers.

Import The Required Model Building Libraries
Import the libraries that are required to initialize the neural network layer, create and add different layers to the neural network model.

Initialize The Model
Initialize the neural network layer by creating a reference/object to the Sequential class.

Add The Convolution Layer:
The first layer of the neural network model, the convolution layer will be added. To create a convolution layer, Convolution2D class is used. It takes a number of feature detectors, feature detector size, expected input shape of the image, activation function as arguments. This layer applies feature detectors on the input image and returns a feature map (features from the image). 

Activation Function: These are the functions which help us to decide if we need to activate the node or not. These functions introduce non-linearity in the networks.

Add The Pooling Layer:
Max Pooling selects the maximum element from the region of the feature map 
covered by the filter. Thus, the output after max-pooling layer would be a 
feature map containing the most prominent features of the previous feature 
map.
After the convolution layer, a pooling layer is added. Max pooling layer can be added using MaxPooling2D class. It takes the pool size as a parameter. Efficient size of the pooling matrix is (2,2). It returns the pooled feature maps. (Note: Any number of convolution layers, pooling and dropout layers can be added)

Add The Flatten Layer
The flatten layer is used to convert n-dimensional arrays to 1-dimensional arrays. This 1D array will be given as input to ANN layers.

Adding The Dense Layers
Three dense layers are added which usually takes number of units/neurons. Specifying the activation function, kind of weight initialization is optional.

After adding all the required layers, the model is to be compiled. For this step, 
loss function, optimizer and metrics for evaluation can be passed as arguments.

Train The Model

Fit the neural network model with the train and test set, number of epochs and 
validation steps.

Test The Model:
The model is to be tested with different images to know if it is working correctly.

Load The Test Image, Pre-Process It and Predict:
Pre-processing the image includes converting the image to array and resizing according to the model. Give the pre-processed image to the model to know to which class your model belongs to.

Application Building:
After the model is built, we will be integrating it to a web application so that 
normal users can also use it. The users need to give the microscopic image of 
the tissue/tumour to know the predictions.
Building Html Pages:
Intro.html displays an introduction about the project.
upload.html gives the emergency alert.
We also use JavaScript-main.js and CSS-main.css to enhance our functionality and view of HTML page.

The home page looks like this. When you click on the button “Drop the scan”, 
you’ll be redirected to the predict section.
In this section you can browse and choose the image you want to predict and 
then
click on predict to get the predictions.
Build Python Code
Run The Application:
In anaconda prompt, navigate to the folder in which the flask app is present. 
When the python file is executed the localhost is activated on 5000 port and 
can be accessed through it
Open the browser and navigate to localhost:5000 to check your 
application:_-
The home page looks like this. When you click on the button “Drop the scan”, 
you’ll be redirected to the predict section
In this section you can browse and choose the image you want to predict and 
then click on predict to get the predictions.
