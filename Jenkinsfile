pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        git(poll: true, url: 'https://github.com/keresifon/eksjenkins.git', branch: 'jenkins', credentialsId: 'Github')
      }
    }

  }
}