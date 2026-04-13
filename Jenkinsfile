pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE_NAME = 'nivivarshna4/merchandise-company-website'
        DOCKER_IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo '====== Checking out code ======'
                checkout scm
                sh 'git log --oneline -1'
            }
        }

        stage('Build') {
            steps {
                echo '====== Building Docker image ======'
                script {
                    sh '''
                        docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} .
                        docker tag ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ${DOCKER_IMAGE_NAME}:latest
                    '''
                }
            }
        }

        stage('Test') {
            steps {
                echo '====== Testing Docker image ======'
                script {
                    sh '''
                        docker run -d -p 8080:8080 --name test-container ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}
                        sleep 5
                        curl -f http://localhost:8080/ || exit 1
                        docker stop test-container
                        docker rm test-container
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '====== Deployment Stage ======'
                echo 'Deployment successful!'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline executed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}