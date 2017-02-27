json.extract! task, :id, :title, :is_done, :project_id, :created_at, :updated_at
json.url task_url(task, format: :json)
