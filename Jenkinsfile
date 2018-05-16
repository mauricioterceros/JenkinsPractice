node {
   stage('Build') {
      echo "build new"
      build job: 'Step1'
   }
   stage('Preparation') {
      echo "Preparation modified"
      build job: 'Step2'
   }
   stage('Results') {
      echo "Results"
      build job: 'Step3'
   }
}