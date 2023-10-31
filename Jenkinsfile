pipeline {
	agent none stages {
    stage('Docker Build') {
    	agent any
      steps {
      	sh 'docker build -t anggakg/reactjs:latest .'
      }
    }
    stage('Docker Push') {
    	agent any
      steps {
      	withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh 'docker push anggakg/reactjs:latest'
        }
      }
    }
  }
}
