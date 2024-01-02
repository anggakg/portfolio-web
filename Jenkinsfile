pipeline {
    agent any

    environment {
        githubcred = credentials('jenkins')
        imagename = "anggakg/reactjs" // Ganti URL dan nama gambar sesuai dengan yang sesuai di GitLab Container Registry
        repodir = '/var/lib/jenkins/repogitlab'
        repourl = 'https://github.com/anggakg/portfolio-web'
    }

    stages {

        stage("checkout"){
            steps{
                checkout scm
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
                    //sh "cd $repodir && git clone $repourl"
                    sh "cd $repodir/portfolio-web/ && git checkout master"
                    sh "cd $repodir/portfolio-web/ && git pull"
                    sh "git config --global user.name 'JenkinsCI'"
                    sh "git config --global user.email 'jenkins@admin.com'"
                    sh "cd $repodir/portfolio-web/ && git add ."
                    sh "cd $repodir/portfolio-web/ && git commit -m 'Update from JenkinsCI'"
                    sh "cd $repodir/portfolio-web/ && git push"
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