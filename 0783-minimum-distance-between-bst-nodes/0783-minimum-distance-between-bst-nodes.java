/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    List<Integer> l = new ArrayList<>();
    int least = Integer.MAX_VALUE;
    public int minDiffInBST(TreeNode root) {
        helper(root);
        
        for(int i=0;i<l.size()-1;i++){
            least = Math.min(least, Math.abs(l.get(i)-l.get(i+1)));
        }
        return least;
    }

    void helper(TreeNode root){
        if(root == null) return;

        helper(root.left);
        l.add(root.val);
        helper(root.right);
    }

}