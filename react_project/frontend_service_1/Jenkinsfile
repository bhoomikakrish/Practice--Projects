pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'bhoomika2897n/frontend-service'
        DOCKER_CREDENTIALS_ID = 'Docker_cred'
    }

    tools {
        nodejs 'node'  // You must define this tool in Jenkins (Manage Jenkins > Global Tool Configuration)
    }

    stages {
        stage('Node Version') {
            steps {
                bat 'node -v'
            }
        }

        stage('Clone Git Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/bhoomikakrish/Frontend_Service.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_CREDENTIALS_ID) {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                // Add your kubectl apply or docker run commands here
            }
        }
    }

    post {
        success {
            echo ' Deployment succeeded!'
        }
        failure {
            echo ' Deployment failed!'
        }
    }
}
