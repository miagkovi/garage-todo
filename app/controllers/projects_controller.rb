class ProjectsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def index
    @user = current_user
    @projects = @user.projects.all
    @project = Project.new
  end

  def show
  end

  def new
    @project = Project.new
  end


  def edit
  end


  def create
    @user = current_user
    @project = @user.projects.build(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
        format.js
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end


  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
        format.js
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end


  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
      format.js
    end
  end

  def sort
    params[:project].each_with_index do |id, index|
      @project = Project.find(id)
      @project.update( { position: index + 1 } )
    end
    render nothing: true
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:name, :position)
    end
end
