pipeline {
    agent any

    environment {
      GITHUB_CRED = credentials('jenkins')
      imagename = "anggakg/reactjs" // Ganti URL dan nama gambar sesuai dengan yang sesuai di GitLab Container Registry
    }

    stages {
        stage('Clone') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: "${params.Branch}"]],
                    userRemoteConfigs: [[credentialsId: 'jenkins',
                    url: "https://github.com/anggakg/Portfolio-Web.git"]]])
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("${imagename}:latest", ".")
                }
            }
        }

        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    script {
                        sh "docker login -u $dockerHubUser -p $dockerHubPassword"
                        sh "docker push ${imagename}:latest"
                        sh "docker rmi ${imagename}:latest"
                    }
                }
            }
        }
        stage('Update Repo Gitlab') {
            steps {
                script {
                    //dir('/var/lib/jenkins/workspace/') {
                    sh "cd /var/lib/jenkins/workspace/nodejs-pipeline && git pull"
                    //sh "git clone https://github.com/anggakg/Portfolio-Web.git"
                    //sh "sed -i '/  name: /s/.*/  name:/' /var/lib/jenkins/workspace/nodejs-pipeline/clusters/my-cluster/apps/${params.service-name}/deployment.yaml" //remove name deployment
                    //sh "awk '/name:/ {\$1=\$1; sub(\"name:\", \"  name: \${params.service-name}\")} 1' /var/lib/jenkins/workspace/nodejs-pipeline/clusters/my-cluster/apps/${params.service-name}/deployment.yaml > tmp && mv tmp deployment.yaml" //changenameservices
                    //sh "sed -i '/  image: /s/.*/  image:/' /var/lib/jenkins/workspace/nodejs-pipeline/clusters/my-cluster/apps/${params.service-name}/deployment.yaml" //remove taging image
                    //sh "awk '/name:/ {\$1=\$1; sub(\"image:\", \"  image: \${params.service-name}:\${params.versionImage}\")} 1' /var/lib/jenkins/workspace/nodejs-pipeline/clusters/my-cluster/apps/${params.service-name}/deployment.yaml > tmp && mv tmp deployment.yaml" //remove tagging image
                    //sh "git checkout applications-1"
                    //sh 'git merge --no-ff main -m "Merge main into applications-1"'
                    //sh "git config --global user.name 'JenkinsCI'"
                    //sh "git config --global user.email 'jenkins@admin.com'"
                    //sh "cd /var/lib/jenkins/repogitlab/flux && git pull"
                    //sh "cd /var/lib/jenkins/repogitlab/flux && git add ."
                    //sh "cd /var/lib/jenkins/repogitlab/flux && git commit -m 'Update Version Image'"
                    //sh "cd /var/lib/jenkins/repogitlab/flux && git push"
                    //sh "rm -rf /var/lib/jenkins/repogitlab/flux"//
                    ///push 
                    //}
                }
            }
        }
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
    }
}