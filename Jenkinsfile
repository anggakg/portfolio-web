pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t anggakg/reactjs:latest .'
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                sh 'docker push anggakg/reactjs:latest'
            }
        }
    }
}
